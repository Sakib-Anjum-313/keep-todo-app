import Todo from "../model/Todo.js";

export const addNewTodo = async (req, res) => {
  try {
   // console.log(req.body);
    const email = req.params.email;
    const newTodo = await Todo.create({
      email: email,
      data: req.body.newTodo,
      createdAt: Date.now(),
    });
    await newTodo.save();

    return res.status(200).json(newTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const email = req.params.email;
    const todos = await Todo.find({email: email}).sort({ createdAt: -1 });

    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const toggleTodoDone = async (req, res) => {
  const id = req.params.id;
  //console.log(id);
  try {
    const previousTodo = await Todo.findById(id);
    // console.log(todoRef);

    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: id },
      { done: !previousTodo.done }
    );

    previousTodo.done = !previousTodo.done;

    await updatedTodo.save();
    // console.log(todoRef);
    return res.status(200).json(previousTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const updateTodo = async (req, res) => {
  const id = req.params.id;
  const todoText = req.body.todoText;
  //console.log(id, todoText);
  try {
    const previousTodo = await Todo.findById(id);
    // console.log(todoRef);

    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: id },
      { data: todoText }
    );

    previousTodo.data = todoText;

    await updatedTodo.save();
    // console.log(todoRef);
    return res.status(200).json(previousTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const deleteTodo = async (req, res) => {
  // console.log(req.params);
  const id = req.params.id;
  try {
    const deletedTodo = await Todo.findOneAndDelete({ _id: id });

    // console.log(todoRef);
    return res.status(200).json({ message: "successful" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};


export const activeTodo = async (req, res) => {
  // console.log();
  const email = req.params.email;

  try {
    const activeTodo = await Todo.find({email:email, done: false}).sort({ createdAt: -1 });

    // console.log(todoRef);
    return res.status(200).json(activeTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};


export const doneTodo = async (req, res) => {
  // console.log();
  const email = req.params.email;
  try {
    const doneTodo = await Todo.find({email:email, done: true }).sort({ createdAt: -1 });

    // console.log(todoRef);
    return res.status(200).json(doneTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};


// export const removeDoneTodos = async (req, res) => {
//   // console.log();
//   const email = req.params.email;
//   console.log(email);
//   try {
//     const removeTodo = await Todo.findByIdAndDelete({ email: email, done: true });

//     console.log(removeTodo);
//     return res.status(200).json(removeTodo);
//   } catch (error) {
//     return res.status(500).json(error.message);
//   }
// };
