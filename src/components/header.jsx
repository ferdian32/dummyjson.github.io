import React,{Component} from "react";
export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <header class="flex items-center justify-center px-10 py-3">
        <div>Products</div>
      </header>
    )
  }
}