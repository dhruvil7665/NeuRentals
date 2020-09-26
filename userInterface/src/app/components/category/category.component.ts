/**
 * Imports
 */
import { Component, OnInit,Injectable } from '@angular/core';
import {CollectionViewer, SelectionChange} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {BehaviorSubject, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {PostDisplayComponent} from "../post-display/post-display.component";
import {CommunicationService} from "../../services/communication.service";

/**
 * Exporting class DynamicFlatNode
 */
export class DynamicFlatNode {
  constructor(public item: string, public level = 1, public expandable = false,
              public isLoading = false) {}
}

/**
 * DataBase for Dynamic data. When a button is clicked it will fetch child nodes
 */
export class DynamicDatabase {
  dataMap = new Map<string, string[]>([
    ['Electronics', ['Laptops', 'Cameras', 'Projector']],
    ['Fitness Equipments', ['Treadmill', 'Dumbbell Set']],
    ['Gaming', ['Playstation', 'FoosballTable']],
    ['Study Materials', ['Books', 'Video Lecture CDs']]
  ]);

  /**Defining parent nodes */
  rootLevelNodes: string[] = ['Electronics', 'Fitness Equipments','Gaming','Study Materials'];

  /** Initial data from database */
  initialData(): DynamicFlatNode[] {
    return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
  }

  /**
   * Method to get child elements
   */
  getChildren(node: string): string[] | undefined {
    return this.dataMap.get(node);
  }
  /**
   * isExpandable method to expand only if it has child
   */
  isExpandable(node: string): boolean {
    return this.dataMap.has(node);
  }
}
/**
 * Observable and subscribe implementation
 */
@Injectable()
export class DynamicDataSource {

  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);

  get data(): DynamicFlatNode[] { return this.dataChange.value; }
  set data(value: DynamicFlatNode[]) {
    this._treeControl.dataNodes = value;
    this.dataChange.next(value);
  }
  constructor(private _treeControl: FlatTreeControl<DynamicFlatNode>,
              private _database: DynamicDatabase) {}

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this._treeControl.expansionModel.onChange.subscribe(change => {
      if ((change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });
// Used pipe
    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }

  /** Handle expand/collapse behaviors */

  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
    }
  }

  /**
   * Toggle the node, remove from display list
   */
  toggleNode(node: DynamicFlatNode, expand: boolean) {
    const children = this._database.getChildren(node.item);
    const index = this.data.indexOf(node);
    if (!children || index < 0) { // If no children, or cannot find the node, no op
      return;
    }

    node.isLoading = true;

    setTimeout(() => {
      if (expand) {
        const nodes = children.map(name =>
          new DynamicFlatNode(name, node.level + 1, this._database.isExpandable(name)));
        this.data.splice(index + 1, 0, ...nodes);
      } else {
        let count = 0;
        for (let i = index + 1; i < this.data.length
        && this.data[i].level > node.level; i++, count++) {}
        this.data.splice(index + 1, count);
      }

      // notify the change
      this.dataChange.next(this.data);
      node.isLoading = false;
    }, 1);
  }
}
/**
 * Components
 */
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [DynamicDatabase]
})

/**
 * @title Tree with dynamic data
 */
export class CategoryComponent implements OnInit {
  postDisplayComponent:PostDisplayComponent
  communication:CommunicationService;
  /**
   * Constructor for CategoryComponent
   */
  constructor(database: DynamicDatabase,postDisplayComponent:PostDisplayComponent,communication:CommunicationService) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, database);
    this.postDisplayComponent=postDisplayComponent;
    this.communication=communication;
    this.dataSource.data = database.initialData();
  }

  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

  ngOnInit() {
  }
}
