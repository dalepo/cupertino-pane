export interface PaneBreaks {
  top?: {enabled: boolean, height?: number, offset?: number};
  middle?: {enabled: boolean, height?: number, offset?: number};
  bottom?: {enabled: boolean, height?: number, offset?: number};
}

export interface Settings {
  initialBreak: ('top' | 'middle' | 'bottom');
  parentElement: any;
  followerElement: string;
  backdrop: boolean;
  backdropOpacity: number;
  animationType: ('ease'|'ease-in'|'ease-out'|'ease-in-out'|'cubic-bezier');
  animationDuration: number;
  bottomOffset: number,
  darkMode: boolean;
  bottomClose: boolean;
  freeMode: boolean;
  buttonClose: boolean;
  topperOverflow: boolean;
  topperOverflowOffset: number;
  showDraggable: boolean;
  draggableOver: boolean;
  clickBottomOpen: boolean;
  dragByCursor: boolean;
  simulateTouch: boolean;
  passiveListeners: boolean;
  breaks: PaneBreaks;
  onDidDismiss: (event?: CustomEvent) => void,
  onWillDismiss: (event?: CustomEvent) => void,
  onDidPresent: (event?: CustomEvent) => void,
  onWillPresent: (event?: CustomEvent) => void,
  onDragStart: (event?: CustomEvent) => void,
  onDrag: (event?: CustomEvent) => void,
  onDragEnd: (event?: CustomEvent) => void,
  onBackdropTap: (event?: CustomEvent) => void,
  onTransitionEnd: (event?: CustomEvent) => void
}