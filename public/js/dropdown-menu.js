define(["backbone","edx-ui-toolkit/views/dropdown-menu-view"],function(e,t){"use strict";var r=new e.Model;return r.set({main:{text:"username",url:"dashboard"},button_label:"User options dropdown",items:[{text:"Dashboard",url:"dashboard"},{text:"Account",url:"account_settings"},{text:"Profile",url:"learner_profile"},{text:"Sign Out",url:"logout"}]}),new t({className:"wrapper-more-actions user-menu logged-in",model:r,parent:".js-user-cta"})});