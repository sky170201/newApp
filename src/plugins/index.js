import {
  Tabbar,
  TabbarItem,
  NavBar,
  Toast,
  Icon,
  Popover,
  Button,
  Tab,
  Tabs,
  Search,
  Field,
  PullRefresh,
  Checkbox,
  CheckboxGroup,
  Card,
  Sidebar,
  SidebarItem,
  Popup,
  SwipeCell,
  Tag,
  List,
  Dialog,
  Form,
  RadioGroup,
  Radio,
  Uploader,
  Cell,
  CellGroup,
  Loading,
  ActionSheet,
  Picker,
  Swipe,
  SwipeItem,
  Collapse,
  CollapseItem,
  DropdownMenu,
  DropdownItem,
  Col,
  Row,
  NoticeBar,
  Image as VanImage,
  Empty,
  Step,
  Steps,
  Grid,
  GridItem
} from 'vant'
/* 放入数组中 */
const plugins = [
  Grid,
  GridItem,
  Step,
  Steps,
  Empty,
  VanImage,
  NoticeBar,
  Col,
  Row,
  Tabbar,
  Swipe,
  SwipeItem,
  TabbarItem,
  NavBar,
  Toast,
  DropdownMenu,
  DropdownItem,
  Icon,
  Popover,
  Button,
  Tab,
  Tabs,
  Search,
  Field,
  PullRefresh,
  Checkbox,
  CheckboxGroup,
  Card,
  Sidebar,
  SidebarItem,
  Popup,
  SwipeCell,
  Tag,
  List,
  Dialog,
  Form,
  RadioGroup,
  Radio,
  Uploader,
  Collapse,
  CollapseItem,
  Cell,
  CellGroup,
  Loading,
  ActionSheet,
  Picker
]

/* 循环将每一个插件注册到app上，main.js直接调用这个方法即可 */
export default function getVant (app) {
  plugins.forEach((item) => {
    return app.use(item)
  })
}