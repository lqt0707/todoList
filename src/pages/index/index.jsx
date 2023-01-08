import { Component } from "react";
import { View, Text, Input } from "@tarojs/components";
import "./index.scss";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页12",
  };

  constructor(props) {
    super(props);
    this.state = {
      // 创建一个初始的 Todolist
      list: ["get up", "coding", "sleep"],
      inputVal: "",
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  addItem() {
    let { list, inputVal } = this.state;
    if (!inputVal) return;
    else list.push(inputVal);
    this.setState({
      list,
      inputVal: "",
    });
  }

  delItem(index) {
    let { list } = this.state;
    list.splice(index, 1);
    this.setState({
      list,
    });
  }

  inputHandler(e) {
    this.setState({
      inputVal: e.target.value,
    });
    // this.state.inputVal = e.target.value;
  }

  render() {
    let { list, inputVal } = this.state;
    return (
      <View className="index">
        <Input
          className="input"
          type="text"
          value={inputVal}
          onInput={this.inputHandler.bind(this)}
        />
        <Text className="add" onClick={this.addItem.bind(this)}>
          添加
        </Text>
        <View className="list_wrap">
          <Text>Todo list</Text>
          {list.map((item, index) => {
            return (
              <View>
                <Text>
                  {index + 1}.{item}
                </Text>
                <Text className="del" onClick={this.delItem.bind(this, index)}>
                  删除
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
