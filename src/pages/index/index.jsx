import { Component } from "react";
import { View, Input, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import "./index.scss";
import { add, del } from "../../actions/index";

@connect(
  ({ todos }) => ({
    todos: todos.todos,
  }),
  (dispatch) => ({
    add(data) {
      dispatch(add(data));
    },
    del(id) {
      dispatch(del(id));
    },
  })
)
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  saveNewTodo(e) {
    let { newTodo } = this.state;
    if (!e.detail.value || e.detail.value === newTodo) return;

    this.setState({
      newTodo: e.detail.value,
    });
  }

  addTodo() {
    let { newTodo } = this.state;
    let { add } = this.props;

    if (!newTodo) return;

    add(newTodo);
    this.setState({
      newTodo: "",
    });
  }

  delTodo(id) {
    let { del } = this.props;
    del(id);
  }

  render() {
    let { newTodo } = this.state;
    let { todos, add, del } = this.props;

    const todoJsx = todos.map((todo) => {
      return (
        <View className="todos_item">
          <Text>{todo.text}</Text>
          <View className="del" onClick={this.delTodo.bind(this, todo.id)}>
            -
          </View>
        </View>
      );
    });

    return (
      <View className="index todos">
        <View className="add_wrap">
          <Input
            placeholder="填写新的todo"
            value={newTodo}
            onBlur={this.saveNewTodo.bind(this)}
          />
          <Text className="add" onClick={this.addTodo.bind(this)}>
            添加
          </Text>
        </View>
        <View>{todoJsx}</View>
      </View>
    );
  }
}
export default Index;
