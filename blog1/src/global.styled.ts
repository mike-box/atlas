import styled, { createGlobalStyle } from 'styled-components';
import { THEME } from './config';

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;


  .ft-regular {
    font-weight: 400;
  }
  .ft-medium {
    font-weight: 500;
  }
  .ft-bold {
    font-weight: 700;
  }
  .ft-09 {
    font-size: .9em;
  }
  .ft-08 {
    font-size: .8em;
  }
  .ft-07 {
    font-size: .6em;
  }
  .ft-06 {
    font-size: .6em;
  }

  .ellipsis {
    /* Required for text-overflow to do anything */
    overflow: hidden; //超出的文本隐藏
    white-space: nowrap; //溢出不换行
    text-overflow: ellipsis; //溢出用省略号显示
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .relative-position {
    position: relative;
  }
  .absolute-position {
    position: absolute;
  }

  .full-size {
    width: 100%;
    height: 100%;
  }

  .flex-start {
    display: flex;
  }
  .flex-end {
    display: flex;
    justify-content: flex-end;
  }
  .flex-between {
    display: flex;
    justify-content: space-between;
  }
  .flex-around {
    display: flex;
    justify-content: space-around;
  }
  .flex-center {
    display: flex;
    justify-content: center;
  }
  .align-center {
    align-items: center;
  }
  .align-start {
    align-items: flex-start;
  }
  .align-end {
    align-items: flex-end;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .direction-reverse {
    flex-direction: row-reverse;
  }
  .direction-col {
    flex-direction: column;
  }


  .radius-025 {
    border-radius: .25em;
  }
  .radius-05 {
    border-radius: .5em;
  }
  .radius-1 {
    border-radius: 1em;
  }


  .shadow01 {
    box-shadow: 
      0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.12),
      0px 1px 3px rgba(0, 0, 0, 0.2);
  }
  .shadow02 {
    box-shadow: 
      0px 2px 2px rgba(0, 0, 0, 0.14),
      0px 3px 1px rgba(0, 0, 0, 0.12),
      0px 1px 5px rgba(0, 0, 0, 0.2);
  }
  .shadow03 {
    box-shadow: 
      0px 3px 4px rgba(0, 0, 0, 0.14),
      0px 3px 3px rgba(0, 0, 0, 0.12),
      0px 1px 8px rgba(0, 0, 0, 0.2);
  }
  .shadow04 {
    box-shadow: 
      0px 4px 5px rgba(0, 0, 0, 0.14),
      0px 1px 10px rgba(0, 0, 0, 0.12),
      0px 2px 4px rgba(0, 0, 0, 0.2);
  }
  .shadow06 {
    box-shadow: 
      0px 6px 10px rgba(0, 0, 0, 0.14), 
      0px 1px 18px rgba(0, 0, 0, 0.12), 
      0px 3px 5px rgba(0, 0, 0, 0.2);
  }
  .shadow08 {
    box-shadow: 
      0px 8px 10px rgba(0, 0, 0, 0.14),
      0px 3px 14px rgba(0, 0, 0, 0.12),
      0px 5px 5px rgba(0, 0, 0, 0.2);
  }
  .shadow09 {
    box-shadow: 
      0px 9px 12px rgba(0, 0, 0, 0.14),
      0px 3px 16px rgba(0, 0, 0, 0.12),
      0px 5px 6px rgba(0, 0, 0, 0.2);
  }
  .shadow12 {
    box-shadow: 
      0px 12px 17px rgba(0, 0, 0, 0.14),
      0px 5px 22px rgba(0, 0, 0, 0.12),
      0px 7px 8px rgba(0, 0, 0, 0.2);
  }
  .shadow16 {
    box-shadow: 
       0px 16px 24px rgba(0, 0, 0, 0.14),
       0px 6px 30px rgba(0, 0, 0, 0.12),
       0px 8px 10px rgba(0, 0, 0, 0.2);
  }
  .shadow24 {
    box-shadow: 
      0px 24px 38px rgba(0, 0, 0, 0.14),
      0px 9px 46px rgba(0, 0, 0, 0.12),
      0px 11px 15px rgba(0, 0, 0, 0.2);
  }


  .debug {
    border: 1px solid #f00;
    padding: 2px;
  }
  
}


img, iframe {
  loading: lazy;
}


h1 {
  font-size: 6em;
}
h2 {
  font-size: 4em;
}
h3 {
  font-size: 3em;
}
h4 {
  font-size: 2em;
}
h5 {
  font-size: 1.5em;
}
h6 {
  font-size: 1.25em;
}

a {
  color: ${THEME.color.link.HEX};
}

body {
  font-family: Helvetica, Tahoma, Arial, STXihei, "华文细黑", Heiti, "黑体", "Microsoft YaHei", "微软雅黑", SimSun, "宋体", sans-serif;
  font-size: 16px;
}

`;
export default GlobalStyle;
