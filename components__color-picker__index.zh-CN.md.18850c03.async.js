"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[9041],{189876:function(u,o,n){n.r(o);var _=n(502143),m=n(968521),g=n(720719),p=n(28840),v=n(759907),l=n(828089),Z=n(825673),f=n(902068),b=n(574399),h=n(863942),k=n(316073),C=n(24628),x=n(719260),P=n(956140),E=n(127179),a=n(905388),D=n(317095),M=n(606965),w=n(268696),y=n(587302),r=n(424128),O=n(249706),R=n(795127),B=n(116846),A=n(73024),c=n(606641),i=n(667294),e=n(370917);function s(){var d=(0,c.eL)(),t=d.texts;return(0,e.tZ)(c.dY,null,(0,e.tZ)(i.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,t[0].value,(0,e.tZ)("code",null,t[1].value),t[2].value),(0,e.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,e.tZ)("p",null,t[3].value),(0,e.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,e.tZ)(a.Z,{items:[{demo:{id:"components-color-picker-demo-base"},previewerProps:{title:"\u57FA\u672C\u4F7F\u7528",filename:"components/color-picker/demo/base.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.3.0","rc-menu":"~9.9.2","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.8.2","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.7.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { ColorPicker } from 'antd';
const Demo = () => <ColorPicker />;
export default Demo;
`,description:"<p>\u6700\u7B80\u5355\u7684\u4F7F\u7528\u65B9\u6CD5\u3002</p>"}},{demo:{id:"components-color-picker-demo-controlled"},previewerProps:{title:"\u53D7\u63A7\u6A21\u5F0F",filename:"components/color-picker/demo/controlled.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.3.0","rc-menu":"~9.9.2","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.8.2","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.7.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { ColorPicker, theme } from 'antd';
import { useState } from 'react';
const Demo = () => {
  const { token } = theme.useToken();
  const [color, setColor] = useState(token.colorPrimary);
  return <ColorPicker value={color} onChange={setColor} />;
};
export default Demo;
`,description:"<p>\u901A\u8FC7 <code>value</code> \u548C <code>onChange</code> \u8BBE\u7F6E\u7EC4\u4EF6\u4E3A\u53D7\u63A7\u6A21\u5F0F\u3002</p>"}},{demo:{id:"components-color-picker-demo-disabled"},previewerProps:{debug:!0,title:"\u7981\u7528",filename:"components/color-picker/demo/disabled.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.3.0","rc-menu":"~9.9.2","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.8.2","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.7.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { ColorPicker } from 'antd';
export default () => <ColorPicker disabled />;
`,description:"<p>\u8BBE\u7F6E\u4E3A\u7981\u7528\u72B6\u6001\u3002</p>"}},{demo:{id:"components-color-picker-demo-allowclear"},previewerProps:{title:"\u6E05\u9664\u989C\u8272",filename:"components/color-picker/demo/allowClear.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.3.0","rc-menu":"~9.9.2","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.8.2","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.7.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { ColorPicker } from 'antd';
export default () => <ColorPicker allowClear />;
`,description:"<p>\u6E05\u9664\u5DF2\u9009\u62E9\u7684\u989C\u8272\u3002</p>"}},{demo:{id:"components-color-picker-demo-trigger"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u89E6\u53D1\u5668",filename:"components/color-picker/demo/trigger.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.3.0","rc-menu":"~9.9.2","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.8.2","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.7.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Button, ColorPicker, theme } from 'antd';
import { useMemo, useState } from 'react';
const Demo = () => {
  const { token } = theme.useToken();
  const [color, setColor] = useState(token.colorPrimary);
  const bgColor = useMemo(() => (typeof color === 'string' ? color : color.toHexString()), [color]);
  const btnStyle = {
    backgroundColor: bgColor,
  };
  return (
    <ColorPicker value={color} onChange={setColor}>
      <Button type="primary" style={btnStyle}>
        open
      </Button>
    </ColorPicker>
  );
};
export default Demo;
`,description:"<p>\u81EA\u5B9A\u4E49\u989C\u8272\u9762\u677F\u7684\u89E6\u53D1\u5668\u3002</p>"}},{demo:{id:"components-color-picker-demo-trigger-event"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u89E6\u53D1\u4E8B\u4EF6",filename:"components/color-picker/demo/trigger-event.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.3.0","rc-menu":"~9.9.2","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.8.2","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.7.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { ColorPicker } from 'antd';
const Demo = () => <ColorPicker trigger="hover" />;
export default Demo;
`,description:"<p>\u81EA\u5B9A\u4E49\u989C\u8272\u9762\u677F\u7684\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u63D0\u4F9B <code>click</code> \u548C <code>hover</code> \u4E24\u4E2A\u9009\u9879\u3002</p>"}},{demo:{id:"components-color-picker-demo-format"},previewerProps:{title:"\u989C\u8272\u7F16\u7801",filename:"components/color-picker/demo/format.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.3.0","rc-menu":"~9.9.2","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.8.2","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.7.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Col, ColorPicker, Row, Space } from 'antd';
import { useMemo, useState } from 'react';
export default () => {
  const [colorHex, setColorHex] = useState('#1677ff');
  const [colorHsb, setColorHsb] = useState('hsb(215, 91%, 100%)');
  const [colorRgb, setColorRgb] = useState('rgb(22, 119, 255)');
  const [formatHex, setFormatHex] = useState('hex');
  const [formatHsb, setFormatHsb] = useState('hsb');
  const [formatRgb, setFormatRgb] = useState('rgb');
  const hexString = useMemo(
    () => (typeof colorHex === 'string' ? colorHex : colorHex.toHexString()),
    [colorHex],
  );
  const hsbString = useMemo(
    () => (typeof colorHsb === 'string' ? colorHsb : colorHsb.toHsbString()),
    [colorHsb],
  );
  const rgbString = useMemo(
    () => (typeof colorRgb === 'string' ? colorRgb : colorRgb.toRgbString()),
    [colorRgb],
  );
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        display: 'flex',
      }}
    >
      <Row align="middle">
        <Space>
          <Col>
            <ColorPicker
              format={formatHex}
              value={colorHex}
              onChange={setColorHex}
              onFormatChange={setFormatHex}
            />
          </Col>
          <Col>
            HEX: <span>{hexString}</span>
          </Col>
        </Space>
      </Row>
      <Row align="middle">
        <Space>
          <Col>
            <ColorPicker
              format={formatHsb}
              value={colorHsb}
              onChange={setColorHsb}
              onFormatChange={setFormatHsb}
            />
          </Col>
          <Col>
            HSB: <span>{hsbString}</span>
          </Col>
        </Space>
      </Row>
      <Row align="middle">
        <Space>
          <Col>
            <ColorPicker
              format={formatRgb}
              value={colorRgb}
              onChange={setColorRgb}
              onFormatChange={setFormatRgb}
            />
          </Col>
          <Col>
            RGB: <span>{rgbString}</span>
          </Col>
        </Space>
      </Row>
    </Space>
  );
};
`,description:"<p>\u7F16\u7801\u683C\u5F0F\uFF0C\u652F\u6301<code>HEX</code>\u3001<code>HSB</code>\u3001<code>RGB</code>\u3002</p>"}},{demo:{id:"components-color-picker-demo-presets"},previewerProps:{title:"\u9884\u8BBE\u989C\u8272",filename:"components/color-picker/demo/presets.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.3.0","rc-menu":"~9.9.2","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.8.2","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.7.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { ColorPicker } from 'antd';
export default () => (
  <ColorPicker
    presets={[
      {
        label: 'Recommended',
        colors: [
          '#000000',
          '#000000E0',
          '#000000A6',
          '#00000073',
          '#00000040',
          '#00000026',
          '#0000001A',
          '#00000012',
          '#0000000A',
          '#00000005',
          '#F5222D',
          '#FA8C16',
          '#FADB14',
          '#8BBB11',
          '#52C41A',
          '#13A8A8',
          '#1677FF',
          '#2F54EB',
          '#722ED1',
          '#EB2F96',
          '#F5222D4D',
          '#FA8C164D',
          '#FADB144D',
          '#8BBB114D',
          '#52C41A4D',
          '#13A8A84D',
          '#1677FF4D',
          '#2F54EB4D',
          '#722ED14D',
          '#EB2F964D',
        ],
      },
      {
        label: 'Recent',
        colors: [],
      },
    ]}
  />
);
`,description:"<p>\u8BBE\u7F6E\u989C\u8272\u9009\u62E9\u5668\u7684\u9884\u8BBE\u989C\u8272\u3002</p>"}},{demo:{id:"components-color-picker-demo-pure-panel"},previewerProps:{debug:!0,title:"Pure Render",filename:"components/color-picker/demo/pure-panel.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.3.0","rc-menu":"~9.9.2","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.8.2","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.7.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { ColorPicker, theme } from 'antd';
import { useState } from 'react';
const PureRenderColorPicker = ColorPicker._InternalPanelDoNotUseOrYouWillBeFired;
export default () => {
  const { token } = theme.useToken();
  const [color, setColor] = useState(token.colorPrimary);
  return (
    <div
      style={{
        paddingLeft: 100,
      }}
    >
      <PureRenderColorPicker value={color} onChange={setColor} />
    </div>
  );
};
`,description:"<p>Pure Panel</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,t[4].value,(0,e.tZ)("code",null,t[5].value),t[6].value)),(0,e.tZ)(l.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",{align:"left"},t[7].value),(0,e.tZ)("th",{align:"left"},t[8].value),(0,e.tZ)("th",{align:"left"},t[9].value),(0,e.tZ)("th",{align:"left"},t[10].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[11].value),(0,e.tZ)("td",{align:"left"},t[12].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[13].value),t[14].value,(0,e.tZ)("code",null,t[15].value),t[16].value,(0,e.tZ)("code",null,t[17].value)),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[18].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[19].value),(0,e.tZ)("td",{align:"left"},t[20].value),(0,e.tZ)("td",{align:"left"},t[21].value,(0,e.tZ)("code",null,t[22].value)),(0,e.tZ)("td",{align:"left"},t[23].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[24].value),(0,e.tZ)("td",{align:"left"},t[25].value),(0,e.tZ)("td",{align:"left"},t[26].value,(0,e.tZ)("code",null,t[27].value)),(0,e.tZ)("td",{align:"left"},t[28].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[29].value),(0,e.tZ)("td",{align:"left"},t[30].value),(0,e.tZ)("td",{align:"left"},t[31].value),(0,e.tZ)("td",{align:"left"},t[32].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[33].value),(0,e.tZ)("td",{align:"left"},t[34].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[35].value)),(0,e.tZ)("td",{align:"left"},t[36].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[37].value),(0,e.tZ)("td",{align:"left"},t[38].value),(0,e.tZ)("td",{align:"left"},t[39].value),(0,e.tZ)("td",{align:"left"},t[40].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[41].value),(0,e.tZ)("td",{align:"left"},t[42].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[43].value),t[44].value,(0,e.tZ)("code",null,t[45].value)),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[46].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[47].value),(0,e.tZ)("td",{align:"left"},t[48].value),(0,e.tZ)("td",{align:"left"},t[49].value),(0,e.tZ)("td",{align:"left"},t[50].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[51].value),(0,e.tZ)("td",{align:"left"},t[52].value),(0,e.tZ)("td",{align:"left"},t[53].value),(0,e.tZ)("td",{align:"left"},t[54].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[55].value),(0,e.tZ)("td",{align:"left"},t[56].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[57].value),t[58].value,(0,e.tZ)("code",null,t[59].value),t[60].value,(0,e.tZ)("code",null,t[61].value),t[62].value,(0,e.tZ)("code",null,t[63].value),t[64].value,(0,e.tZ)("code",null,t[65].value),t[66].value,(0,e.tZ)("code",null,t[67].value)),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[68].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[69].value),(0,e.tZ)("td",{align:"left"},t[70].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[71].value)),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[72].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[73].value),(0,e.tZ)("td",{align:"left"},t[74].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[75].value)),(0,e.tZ)("td",{align:"left"},t[76].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[77].value),(0,e.tZ)("td",{align:"left"},t[78].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[79].value)),(0,e.tZ)("td",{align:"left"},t[80].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[81].value),(0,e.tZ)("td",{align:"left"},t[82].value,(0,e.tZ)("code",null,t[83].value),t[84].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[85].value)),(0,e.tZ)("td",{align:"left"},t[86].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[87].value),(0,e.tZ)("td",{align:"left"},t[88].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[89].value)),(0,e.tZ)("td",{align:"left"},t[90].value)))),(0,e.tZ)("h3",{id:"color"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#color",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Color"),(0,e.tZ)(l.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",{align:"left"},t[91].value),(0,e.tZ)("th",{align:"left"},t[92].value),(0,e.tZ)("th",{align:"left"},t[93].value),(0,e.tZ)("th",{align:"left"},t[94].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[95].value),(0,e.tZ)("td",{align:"left"},t[96].value,(0,e.tZ)("code",null,t[97].value),t[98].value,(0,e.tZ)("code",null,t[99].value)),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[100].value)),(0,e.tZ)("td",{align:"left"},t[101].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[102].value),(0,e.tZ)("td",{align:"left"},t[103].value,(0,e.tZ)("code",null,t[104].value),t[105].value,(0,e.tZ)("code",null,t[106].value)),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[107].value)),(0,e.tZ)("td",{align:"left"},t[108].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[109].value),(0,e.tZ)("td",{align:"left"},t[110].value,(0,e.tZ)("code",null,t[111].value),t[112].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[113].value)),(0,e.tZ)("td",{align:"left"},t[114].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[115].value),(0,e.tZ)("td",{align:"left"},t[116].value,(0,e.tZ)("code",null,t[117].value),t[118].value,(0,e.tZ)("code",null,t[119].value)),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[120].value)),(0,e.tZ)("td",{align:"left"},t[121].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[122].value),(0,e.tZ)("td",{align:"left"},t[123].value,(0,e.tZ)("code",null,t[124].value),t[125].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[126].value)),(0,e.tZ)("td",{align:"left"},t[127].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},t[128].value),(0,e.tZ)("td",{align:"left"},t[129].value,(0,e.tZ)("code",null,t[130].value),t[131].value,(0,e.tZ)("code",null,t[132].value)),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,t[133].value)),(0,e.tZ)("td",{align:"left"},t[134].value)))),(0,e.tZ)("h2",{id:"faq"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,e.tZ)("h3",{id:"\u5173\u4E8E\u989C\u8272\u8D4B\u503C\u7684\u95EE\u9898"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5173\u4E8E\u989C\u8272\u8D4B\u503C\u7684\u95EE\u9898",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u5173\u4E8E\u989C\u8272\u8D4B\u503C\u7684\u95EE\u9898"),(0,e.tZ)("p",null,t[135].value,(0,e.tZ)("code",null,t[136].value),t[137].value,(0,e.tZ)("code",null,t[138].value),t[139].value))))}o.default=s}}]);