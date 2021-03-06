// Type definitions for ag-grid v13.0.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { AbstractColDef } from "./colDef";
import { IEventEmitter } from "../interfaces/iEventEmitter";
export interface ColumnGroupChild extends IEventEmitter {
    getUniqueId(): string;
    getActualWidth(): number;
    getMinWidth(): number;
    getLeft(): number;
    getOldLeft(): number;
    getDefinition(): AbstractColDef;
    getColumnGroupShow(): string;
    getParent(): ColumnGroupChild;
    isResizable(): boolean;
    setParent(parent: ColumnGroupChild): void;
    isEmptyGroup(): boolean;
}
