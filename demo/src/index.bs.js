// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Emotion = require("@ahrefs/bs-emotion/src/Emotion.bs.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");

var styles = Emotion.css(undefined, /* :: */[
      Emotion.display(/* flex */-1010954439),
      /* :: */[
        Emotion.color(Emotion.hex("333")),
        /* [] */0
      ]
    ]);

function Index$Style(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: styles
            }, children);
}

var Style = {
  styles: styles,
  make: Index$Style
};

var styled = Emotion.css(undefined, /* :: */[
      Emotion.display(/* flex */-1010954439),
      /* [] */0
    ]);

function Index$Component2(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: styled
            }, children);
}

var Component2 = {
  styled: styled,
  make: Index$Component2
};

function Index$Demo(Props) {
  return React.createElement(Index$Style, {
              children: "React API"
            });
}

var Demo = {
  make: Index$Demo
};

ReactDOMRe.renderToElementWithId(React.createElement(Index$Demo, { }), "app");

exports.Style = Style;
exports.Component2 = Component2;
exports.Demo = Demo;
/* styles Not a pure module */