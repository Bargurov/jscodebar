import { useTypedSelector } from "./use-typed-selector";

export const useSharedCode = (cellID: string) => {
	return useTypedSelector((state) => {
		const { data, order } = state.cells;
		const orderedCells = order.map((id) => data[id]);
		const showFunc = `
      import _React from 'react';
      import _ReactDOM from 'react-dom';
      var show = (value) => {
        const root = document.querySelector('#root')
      
        if(typeof value === 'object'){
          if(value.$$typeof && value.props){
           _ReactDOM.render(value,root);
          }else{
            root.innerHTML = JSON.stringify(value);
          }
        }else{
        root.innerHTML = value;
        }
    };`;
		const showFuncNoop = `var show = ()=>{}`;
		const sharedCode = [];
		for (let code of orderedCells) {
			if (code.type === "code") {
				if (code.id === cellID) {
					sharedCode.push(showFunc);
				} else {
					sharedCode.push(showFuncNoop);
				}
				sharedCode.push(code.content);
			}
			if (code.id === cellID) {
				break;
			}
		}
		return sharedCode;
	}).join("\n");
};
