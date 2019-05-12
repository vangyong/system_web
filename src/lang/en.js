export default {
  route: {
    dashboard: 'Dashboard',
    introduction: 'Introduction',
    documentation: 'Documentation',
    guide: 'Guide',
    permission: 'Permission',
    pagePermission: 'Page Permission',
    directivePermission: 'Directive Permission',
    system: 'System Manage',
    user: 'User Manage',
    role: 'Role Manage',
    resource: 'Resource Manage',
    tenant: 'Tenant Manage',
    mall: 'Mall Manage',
    goods: 'Goods Manage',
    member: 'Member Manage',
    product: 'Product Manage',
    saleOrder: 'Sale Order',
    icons: 'Icons',
    components: 'Components',
    componentIndex: 'Introduction',
    tinymce: 'Tinymce',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    dndList: 'Dnd List',
    splitPane: 'SplitPane',
    avatarUpload: 'Avatar Upload',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'CountTo',
    componentMixin: 'Mixin',
    backToTop: 'BackToTop',
    dragDialog: 'Drag Dialog',
    dragKanban: 'Drag Kanban',
    charts: 'Charts',
    keyboardChart: 'Keyboard Chart',
    lineChart: 'Line Chart',
    mixChart: 'Mix Chart',
    example: 'Example',
    nested: 'Nested Routes',
    menu1: 'Menu 1',
    'menu1-1': 'Menu 1-1',
    'menu1-2': 'Menu 1-2',
    'menu1-2-1': 'Menu 1-2-1',
    'menu1-2-2': 'Menu 1-2-2',
    'menu1-3': 'Menu 1-3',
    menu2: 'Menu 2',
    Table: 'Table',
    dynamicTable: 'Dynamic Table',
    dragTable: 'Drag Table',
    inlineEditTable: 'Inline Edit',
    complexTable: 'Complex Table',
    treeTable: 'Tree Table',
    customTreeTable: 'Custom TreeTable',
    tab: 'Tab',
    form: 'Form',
    createArticle: 'Create Article',
    editArticle: 'Edit Article',
    articleList: 'Article List',
    errorPages: 'Error Pages',
    page401: '401',
    page404: '404',
    errorLog: 'Error Log',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    exportZip: 'Export Zip',
    theme: 'Theme',
    clipboardDemo: 'Clipboard',
    i18n: 'I18n',
    externalLink: 'External Link'
  },
  navbar: {
    logOut: 'Log Out',
    dashboard: 'Dashboard',
    github: 'Github',
    screenfull: 'Screenfull',
    theme: 'Theme',
    size: 'Global Size'
  },
  login: {
    title: 'Login Form',
    logIn: 'Log in',
    username: 'Username',
    password: 'Password',
    any: '123456',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository'
  },
  permission: {
    roles: 'Your roles',
    switchRoles: 'Switch roles'
  },
  guide: {
    description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
    button: 'Show Guide'
  },
  components: {
    documentation: 'Documentation',
    tinymceTips: 'Rich text editor is a core part of management system, but at the same time is a place with lots of problems. In the process of selecting rich texts, I also walked a lot of detours. The common rich text editors in the market are basically used, and the finally chose Tinymce. See documentation for more detailed rich text editor comparisons and introductions.',
    dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
    stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
  },
  table: {
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    dragTips1: 'The default order',
    dragTips2: 'The after dragging order',
    title: 'Title',
    importance: 'Imp',
    type: 'Type',
    remark: 'Remark',
    search: 'Search',
    add: 'Add',
    export: 'Export',
    reviewer: 'reviewer',
    id: 'ID',
    date: 'Date',
    author: 'Author',
    readings: 'Readings',
    status: 'Status',
    actions: 'Actions',
    edit: 'Edit',
    publish: 'Publish',
    draft: 'Draft',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm'
  },
  form: {
    create: 'Create',
    update: 'Edit',
    delete: 'Delete',
    cancel: 'Cancel',
    save: 'Save',
    confirm: 'Confirm',
    deleteStatus: 'DeleteStatus',
    deleteStatus_deleted: 'Deleted',
    deleteStatus_nodelete: 'NoDelete'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
  },
  excel: {
    export: 'Export',
    selectedExport: 'Export Selected Items',
    placeholder: 'Please enter the file name(default excel-list)'
  },
  zip: {
    export: 'Export',
    placeholder: 'Please enter the file name(default file)'
  },
  theme: {
    change: 'Change Theme',
    documentation: 'Theme documentation',
    tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  },
  notify: {
    success: 'Success',
    createSuccess: 'Create Success',
    editSuccess: 'Edit Success',
    deleteSuccess: 'Delete Success',
    fail: 'Fail',
    createFail: 'Create Fail',
    editFail: 'Edit Fail',
    deleteFail: 'Delete Fail'
  },
  user: {
    userId: 'User Id',
    nickName: 'Nick Name',
    userName: 'User Name',
    password: 'Password',
    gender: 'Gender',
    gender_male: 'Male',
    gender_female: 'Female',
    mobileNumber: 'Mobile',
    createTime: 'Create Time',
    deleteStatus: 'Delete Status'
  },
  role: {
    roleId: 'Role Id',
    roleName: 'Role Name',
    roleCode: 'Role Code',
    description: 'description',
    locked: 'Locked Status',
    locked_0: 'No Locked',
    locked_1: 'Locked',
    tenant_id: 'Tenant Id',
    createTime: 'Create Time',
    deleteStatus: 'Delete Status'
  },
  resource: {
    resourceId: 'Resource Id',
    resourceName: 'Resource Name',
    resourceCode: 'Resource Code',
    resourceUrl: 'Resource Url',
    description: 'Description',
    hide: 'Hide',
    hide_0: 'No Hide',
    hide_1: 'Hide',
    createTime: 'Create Time',
    deleteStatus: 'Delete Status'
  },
  tenant: {
    tenantId: 'Tenant Id',
    tenantName: 'Tenant Name',
    tenantCode: 'Tenant Code',
    status: 'Status',
    status_0: 'register',
    status_1: 'Pending Review',
    status_2: 'No Pass',
    status_3: 'Normal Operation',
    status_4: 'Paused',
    status_5: 'Revoke',
    mobileNumber: 'Mobile Number',
    officePhone: 'Office Phone',
    createTime: 'Create Time',
    deleteStatus: 'Delete Status',
    businessModel: 'Business Model',
    mainProduct: 'Main Product',
    examine: 'Examine'
  },
  goods: {
    goodsId: 'Goods Id',
    goodsName: 'Goods Name',
    goodsCode: 'Goods Code',
    status: 'Status',
    status_0: 'Edit',
    status_1: 'Pending Review',
    status_2: 'No Pass',
    status_3: 'On Sale',
    status_4: 'Obtained',
    status_5: 'Sold Out',
    brief: 'Brief',
    createTime: 'Create Time',
    deleteStatus: 'Delete Status',
    examine: 'Examine'
  },
  saleOrder: {
    saleOrderId: 'SaleOrderid',
    saleOrderName: 'SaleOrder Name',
    saleOrderCode: 'SaleOrder Code',
    status: 'Status',
    status_0: 'Not Shipped ',
    status_1: 'Shipped',
    status_2: 'Complete',
    orderMoney: 'Order Money',
    shipFee: 'Ship Fee',
    createTime: '创建时间',
    deleteStatus: '删除状态',
    examine: '审核'
  }
}
