"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2443],{266047:function(c,a,t){t.r(a);var m=t(502143),h=t(968521),g=t(720719),Z=t(28840),i=t(759907),o=t(828089),E=t(825673),p=t(902068),v=t(574399),P=t(863942),x=t(316073),D=t(24628),M=t(719260),O=t(956140),d=t(127179),T=t(905388),f=t(317095),C=t(606965),I=t(268696),A=t(587302),_=t(424128),b=t(249706),B=t(795127),L=t(116846),k=t(73024),s=t(606641),l=t(667294),n=t(370917);function r(){var u=(0,s.eL)(),e=u.texts;return(0,n.tZ)(s.dY,null,(0,n.tZ)(l.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,e[1].value,(0,n.tZ)("code",null,e[2].value),e[3].value),(0,n.tZ)("li",null,e[4].value,(0,n.tZ)("code",null,e[5].value),e[6].value,(0,n.tZ)("code",null,e[7].value),e[8].value,(0,n.tZ)("code",null,e[9].value),e[10].value)),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(s.Dl,{demo:{id:"components-app-demo-basic"},previewerProps:{title:"basic",filename:"components/app/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.3.0","rc-menu":"~9.9.2","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.8.2","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.7.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { App, Button, Space } from 'antd';

// Sub page
const MyPage = () => {
  const { message, modal, notification } = App.useApp();
  const showMessage = () => {
    message.success('Success!');
  };
  const showModal = () => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };
  const showNotification = () => {
    notification.info({
      message: \`Notification topLeft\`,
      description: 'Hello, Ant Design!!',
      placement: 'topLeft',
    });
  };
  return (
    <Space>
      <Button type="primary" onClick={showMessage}>
        Open message
      </Button>
      <Button type="primary" onClick={showModal}>
        Open modal
      </Button>
      <Button type="primary" onClick={showNotification}>
        Open notification
      </Button>
    </Space>
  );
};

// Entry component
export default () => (
  <App>
    <MyPage />
  </App>
);
`,description:"<p>Static method for <code>message</code>, <code>notification</code>, <code>modal</code>.</p>"}}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"how-to-use"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-use",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"How to use"),(0,n.tZ)("h3",{id:"basic-usage"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#basic-usage",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Basic usage"),(0,n.tZ)("p",null,e[11].value,(0,n.tZ)("code",null,e[12].value),e[13].value),(0,n.tZ)(i.Z,{lang:"tsx"},e[14].value),(0,n.tZ)("p",null,e[15].value),(0,n.tZ)("h3",{id:"sequence-with-configprovider"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-with-configprovider",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Sequence with ConfigProvider"),(0,n.tZ)("p",null,e[16].value,(0,n.tZ)("code",null,e[17].value),e[18].value),(0,n.tZ)(i.Z,{lang:"tsx"},e[19].value),(0,n.tZ)("h3",{id:"embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Embedded usage scenarios (if not necessary, try not to do nesting)"),(0,n.tZ)(i.Z,{lang:"tsx"},e[20].value),(0,n.tZ)("h3",{id:"global-scene-redux-scene"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#global-scene-redux-scene",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Global scene (redux scene)"),(0,n.tZ)(i.Z,{lang:"tsx"},e[21].value),(0,n.tZ)(i.Z,{lang:"tsx"},e[22].value),(0,n.tZ)("h2",{id:"api"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"app"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#app",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"App"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[23].value),(0,n.tZ)("th",null,e[24].value),(0,n.tZ)("th",null,e[25].value),(0,n.tZ)("th",null,e[26].value),(0,n.tZ)("th",null,e[27].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[28].value),(0,n.tZ)("td",null,e[29].value),(0,n.tZ)("td",null,(0,n.tZ)(_.Z,{to:"/components/message/#messageconfig",sourceType:"Link"},e[30].value)),(0,n.tZ)("td",null,e[31].value),(0,n.tZ)("td",null,e[32].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[33].value),(0,n.tZ)("td",null,e[34].value),(0,n.tZ)("td",null,(0,n.tZ)(_.Z,{to:"/components/notification/#notificationconfig",sourceType:"Link"},e[35].value)),(0,n.tZ)("td",null,e[36].value),(0,n.tZ)("td",null,e[37].value)))),(0,n.tZ)("h2",{id:"design-token"},(0,n.tZ)(_.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,n.tZ)(d.Z,{component:"App"})))}a.default=r}}]);
