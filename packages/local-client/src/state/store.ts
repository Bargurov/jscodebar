import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { saveMiddleWare } from "./middlewares/save-cells";

export const store = createStore(
	reducers,
	{},
	applyMiddleware(saveMiddleWare, thunk),
);
