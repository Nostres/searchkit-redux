import {Accessor} from "./Accessor";

export class HighlightAccessor extends Accessor {

  highlightOptions:any
  constructor(public options:Object){
    super()
    this.highlightOptions = options
  }

  buildOwnQuery(query){
    return query.setHighlight(this.highlightOptions)
  }
}
