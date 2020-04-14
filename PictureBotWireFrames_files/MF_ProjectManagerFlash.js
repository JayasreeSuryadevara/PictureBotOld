if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
var c;
var addedNow = [];

if (!dwr.engine._mappedClasses["MF_CollaboratorOld"]) {
c = function() {
this.online = null;
this.disabled = null;
this.id = null;
this.type = null;
this.sharePerm = null;
this.userid = null;
this.mockupid = null;
}
c.$dwrClassName = 'MF_CollaboratorOld';
c.$dwrClassMembers = {};
c.$dwrClassMembers.online = {};
c.$dwrClassMembers.disabled = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.sharePerm = {};
c.$dwrClassMembers.userid = {};
c.$dwrClassMembers.mockupid = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_CollaboratorOld", c);
dwr.engine._mappedClasses["MF_CollaboratorOld"] = c;
addedNow["MF_CollaboratorOld"] = true;
}

if (!dwr.engine._mappedClasses["MF_User"]) {
c = function() {
this.lastLogin = null;
this.lastName = null;
this.isNewLicense = null;
this.companyName = null;
this.pid = null;
this.storage = null;
this.isTrial = null;
this.type = null;
this.emailAlert = null;
this.password = null;
this.tokenKey = null;
this.company = null;
this.daysLeft = 0;
this.teamPremium = null;
this.createDate = null;
this.isBasic = null;
this.offlineMode = null;
this.accountType = null;
this.projectsLeft = 0;
this.teamLicenseOwner = null;
this.plusEdition = null;
this.firstName = null;
this.jwtToken = null;
this.hadTrial = null;
this.teamEditor = null;
this.username = null;
}
c.$dwrClassName = 'MF_User';
c.$dwrClassMembers = {};
c.$dwrClassMembers.lastLogin = {};
c.$dwrClassMembers.lastName = {};
c.$dwrClassMembers.isNewLicense = {};
c.$dwrClassMembers.companyName = {};
c.$dwrClassMembers.pid = {};
c.$dwrClassMembers.storage = {};
c.$dwrClassMembers.isTrial = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.emailAlert = {};
c.$dwrClassMembers.password = {};
c.$dwrClassMembers.tokenKey = {};
c.$dwrClassMembers.company = {};
c.$dwrClassMembers.daysLeft = {};
c.$dwrClassMembers.teamPremium = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.isBasic = {};
c.$dwrClassMembers.offlineMode = {};
c.$dwrClassMembers.accountType = {};
c.$dwrClassMembers.projectsLeft = {};
c.$dwrClassMembers.teamLicenseOwner = {};
c.$dwrClassMembers.plusEdition = {};
c.$dwrClassMembers.firstName = {};
c.$dwrClassMembers.jwtToken = {};
c.$dwrClassMembers.hadTrial = {};
c.$dwrClassMembers.teamEditor = {};
c.$dwrClassMembers.username = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_User", c);
dwr.engine._mappedClasses["MF_User"] = c;
addedNow["MF_User"] = true;
}

if (!dwr.engine._mappedClasses["MF_Company"]) {
c = function() {
this.companyid = null;
this.creator = null;
this.edition = null;
this.plimit = 0;
this.pid = null;
this.dbserver = null;
this.storage = null;
this.createDate = null;
this.status = null;
}
c.$dwrClassName = 'MF_Company';
c.$dwrClassMembers = {};
c.$dwrClassMembers.companyid = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.edition = {};
c.$dwrClassMembers.plimit = {};
c.$dwrClassMembers.pid = {};
c.$dwrClassMembers.dbserver = {};
c.$dwrClassMembers.storage = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.status = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Company", c);
dwr.engine._mappedClasses["MF_Company"] = c;
addedNow["MF_Company"] = true;
}

if (!dwr.engine._mappedClasses["MF_LicenseUser"]) {
c = function() {
this.clientid = null;
this.id = null;
this.email = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_LicenseUser';
c.$dwrClassMembers = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.email = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_LicenseUser", c);
dwr.engine._mappedClasses["MF_LicenseUser"] = c;
addedNow["MF_LicenseUser"] = true;
}

if (!dwr.engine._mappedClasses["MF_CompCategory"]) {
c = function() {
this.clientid = null;
this.includeCommon = null;
this.custompack = null;
this.tags = null;
this.modify = null;
this.componentItemList = null;
this.isMaster = null;
this.name = null;
this.isMergeablePack = null;
this.id = null;
this.mergeablePackData = null;
this.masterClientid = null;
this.isShared = null;
this.createDate = null;
this.importcategory = null;
}
c.$dwrClassName = 'MF_CompCategory';
c.$dwrClassMembers = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.includeCommon = {};
c.$dwrClassMembers.custompack = {};
c.$dwrClassMembers.tags = {};
c.$dwrClassMembers.modify = {};
c.$dwrClassMembers.componentItemList = {};
c.$dwrClassMembers.isMaster = {};
c.$dwrClassMembers.name = {};
c.$dwrClassMembers.isMergeablePack = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.mergeablePackData = {};
c.$dwrClassMembers.masterClientid = {};
c.$dwrClassMembers.isShared = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.importcategory = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_CompCategory", c);
dwr.engine._mappedClasses["MF_CompCategory"] = c;
addedNow["MF_CompCategory"] = true;
}

if (!dwr.engine._mappedClasses["MF_PageData"]) {
c = function() {
this.eid = null;
this.compressedData = [];
this.updateDate = null;
this.clientid = null;
this.comments = 0;
this.data = null;
this.snapped = null;
this.stamp = null;
this.deletedBy = null;
this.name = null;
this.sortorder = 0;
this.projectid = null;
this.createDate = null;
this.deleteDate = null;
}
c.$dwrClassName = 'MF_PageData';
c.$dwrClassMembers = {};
c.$dwrClassMembers.eid = {};
c.$dwrClassMembers.compressedData = {};
c.$dwrClassMembers.updateDate = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.comments = {};
c.$dwrClassMembers.data = {};
c.$dwrClassMembers.snapped = {};
c.$dwrClassMembers.stamp = {};
c.$dwrClassMembers.deletedBy = {};
c.$dwrClassMembers.name = {};
c.$dwrClassMembers.sortorder = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.deleteDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_PageData", c);
dwr.engine._mappedClasses["MF_PageData"] = c;
addedNow["MF_PageData"] = true;
}

if (!dwr.engine._mappedClasses["MF_DashboardData"]) {
c = function() {
this.ownedProjectsCount = 0;
this.projects = null;
this.totalProjectsCount = 0;
this.readonlyProjectsCount = 0;
this.trashProjectsCount = 0;
this.sharedProjectsCount = 0;
this.logshared = null;
this.labels = null;
this.publicProjectsCount = 0;
}
c.$dwrClassName = 'MF_DashboardData';
c.$dwrClassMembers = {};
c.$dwrClassMembers.ownedProjectsCount = {};
c.$dwrClassMembers.projects = {};
c.$dwrClassMembers.totalProjectsCount = {};
c.$dwrClassMembers.readonlyProjectsCount = {};
c.$dwrClassMembers.trashProjectsCount = {};
c.$dwrClassMembers.sharedProjectsCount = {};
c.$dwrClassMembers.logshared = {};
c.$dwrClassMembers.labels = {};
c.$dwrClassMembers.publicProjectsCount = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_DashboardData", c);
dwr.engine._mappedClasses["MF_DashboardData"] = c;
addedNow["MF_DashboardData"] = true;
}

if (!dwr.engine._mappedClasses["MF_ProjectInfoData"]) {
c = function() {
this.log = null;
this.collaborators = null;
}
c.$dwrClassName = 'MF_ProjectInfoData';
c.$dwrClassMembers = {};
c.$dwrClassMembers.log = {};
c.$dwrClassMembers.collaborators = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_ProjectInfoData", c);
dwr.engine._mappedClasses["MF_ProjectInfoData"] = c;
addedNow["MF_ProjectInfoData"] = true;
}

if (!dwr.engine._mappedClasses["MF_PageExport"]) {
c = function() {
this.path = null;
this.pw = 0;
this.name = null;
this.ph = 0;
this.px = 0;
this.snapped = null;
this.py = 0;
this.imagedata = null;
this.id = null;
}
c.$dwrClassName = 'MF_PageExport';
c.$dwrClassMembers = {};
c.$dwrClassMembers.path = {};
c.$dwrClassMembers.pw = {};
c.$dwrClassMembers.name = {};
c.$dwrClassMembers.ph = {};
c.$dwrClassMembers.px = {};
c.$dwrClassMembers.snapped = {};
c.$dwrClassMembers.py = {};
c.$dwrClassMembers.imagedata = {};
c.$dwrClassMembers.id = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_PageExport", c);
dwr.engine._mappedClasses["MF_PageExport"] = c;
addedNow["MF_PageExport"] = true;
}

if (!dwr.engine._mappedClasses["MF_SharePermOld"]) {
c = function() {
this.canPreviewRevision = null;
this.canUploadImage = null;
this.canViewMembers = null;
this.canDeleteImage = null;
this.canChat = null;
this.canExportData = null;
this.canChangeSiteMap = null;
this.canDeleteRevision = null;
this.canViewLog = null;
this.canDuplicateProject = null;
}
c.$dwrClassName = 'MF_SharePermOld';
c.$dwrClassMembers = {};
c.$dwrClassMembers.canPreviewRevision = {};
c.$dwrClassMembers.canUploadImage = {};
c.$dwrClassMembers.canViewMembers = {};
c.$dwrClassMembers.canDeleteImage = {};
c.$dwrClassMembers.canChat = {};
c.$dwrClassMembers.canExportData = {};
c.$dwrClassMembers.canChangeSiteMap = {};
c.$dwrClassMembers.canDeleteRevision = {};
c.$dwrClassMembers.canViewLog = {};
c.$dwrClassMembers.canDuplicateProject = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_SharePermOld", c);
dwr.engine._mappedClasses["MF_SharePermOld"] = c;
addedNow["MF_SharePermOld"] = true;
}

if (!dwr.engine._mappedClasses["MF_LogShared"]) {
c = function() {
this.creator = null;
this.logtype = null;
this.receiver = null;
this.creatorName = null;
this.opened = null;
this.id = null;
this.projectName = null;
this.projectid = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_LogShared';
c.$dwrClassMembers = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.logtype = {};
c.$dwrClassMembers.receiver = {};
c.$dwrClassMembers.creatorName = {};
c.$dwrClassMembers.opened = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.projectName = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_LogShared", c);
dwr.engine._mappedClasses["MF_LogShared"] = c;
addedNow["MF_LogShared"] = true;
}

if (!dwr.engine._mappedClasses["MF_Collaborator"]) {
c = function() {
this.online = null;
this.disabled = null;
this.id = null;
this.type = null;
this.projectid = null;
this.sharePerm = null;
this.userid = null;
}
c.$dwrClassName = 'MF_Collaborator';
c.$dwrClassMembers = {};
c.$dwrClassMembers.online = {};
c.$dwrClassMembers.disabled = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.sharePerm = {};
c.$dwrClassMembers.userid = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Collaborator", c);
dwr.engine._mappedClasses["MF_Collaborator"] = c;
addedNow["MF_Collaborator"] = true;
}

if (!dwr.engine._mappedClasses["MF_Log"]) {
c = function() {
this.creator = null;
this.logtype = null;
this.clientid = null;
this.log = null;
this.creatorName = null;
this.id = null;
this.projectid = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_Log';
c.$dwrClassMembers = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.logtype = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.log = {};
c.$dwrClassMembers.creatorName = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Log", c);
dwr.engine._mappedClasses["MF_Log"] = c;
addedNow["MF_Log"] = true;
}

if (!dwr.engine._mappedClasses["MF_Image"]) {
c = function() {
this.creator = null;
this.clientid = null;
this.size = null;
this.name = null;
this.width = 0;
this.id = null;
this.type = null;
this.projectid = null;
this.createDate = null;
this.height = 0;
}
c.$dwrClassName = 'MF_Image';
c.$dwrClassMembers = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.size = {};
c.$dwrClassMembers.name = {};
c.$dwrClassMembers.width = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.height = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Image", c);
dwr.engine._mappedClasses["MF_Image"] = c;
addedNow["MF_Image"] = true;
}

if (!dwr.engine._mappedClasses["MF_ComponentItem"]) {
c = function() {
this.packId = null;
this.clientid = null;
this.isMaster = null;
this.sort = 0;
this.l = null;
this.masterClientid = null;
this.pack = null;
this.db = null;
this.n = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_ComponentItem';
c.$dwrClassMembers = {};
c.$dwrClassMembers.packId = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.isMaster = {};
c.$dwrClassMembers.sort = {};
c.$dwrClassMembers.l = {};
c.$dwrClassMembers.masterClientid = {};
c.$dwrClassMembers.pack = {};
c.$dwrClassMembers.db = {};
c.$dwrClassMembers.n = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_ComponentItem", c);
dwr.engine._mappedClasses["MF_ComponentItem"] = c;
addedNow["MF_ComponentItem"] = true;
}

if (!dwr.engine._mappedClasses["MF_CompTemplate"]) {
c = function() {
this.eid = null;
this.compressedData = [];
this.updateDate = null;
this.clientid = null;
this.data = null;
this.name = null;
this.projectid = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_CompTemplate';
c.$dwrClassMembers = {};
c.$dwrClassMembers.eid = {};
c.$dwrClassMembers.compressedData = {};
c.$dwrClassMembers.updateDate = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.data = {};
c.$dwrClassMembers.name = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_CompTemplate", c);
dwr.engine._mappedClasses["MF_CompTemplate"] = c;
addedNow["MF_CompTemplate"] = true;
}

if (!dwr.engine._mappedClasses["MF_ProjectLabel"]) {
c = function() {
this.clientid = null;
this.projects = null;
this.color = null;
this.name = null;
this.id = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_ProjectLabel';
c.$dwrClassMembers = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.projects = {};
c.$dwrClassMembers.color = {};
c.$dwrClassMembers.name = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_ProjectLabel", c);
dwr.engine._mappedClasses["MF_ProjectLabel"] = c;
addedNow["MF_ProjectLabel"] = true;
}

if (!dwr.engine._mappedClasses["MF_DBComponent"]) {
c = function() {
this.imagePresent = null;
this.creator = null;
this.images = null;
this.data = null;
this.name = null;
this.customFonts = null;
this.id = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_DBComponent';
c.$dwrClassMembers = {};
c.$dwrClassMembers.imagePresent = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.images = {};
c.$dwrClassMembers.data = {};
c.$dwrClassMembers.name = {};
c.$dwrClassMembers.customFonts = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_DBComponent", c);
dwr.engine._mappedClasses["MF_DBComponent"] = c;
addedNow["MF_DBComponent"] = true;
}

if (!dwr.engine._mappedClasses["MF_UserInactive"]) {
c = function() {
this.firstName = null;
this.lastName = null;
this.password = null;
this.companyName = null;
this.expiry = null;
this.activateKey = null;
this.createDate = null;
this.username = null;
}
c.$dwrClassName = 'MF_UserInactive';
c.$dwrClassMembers = {};
c.$dwrClassMembers.firstName = {};
c.$dwrClassMembers.lastName = {};
c.$dwrClassMembers.password = {};
c.$dwrClassMembers.companyName = {};
c.$dwrClassMembers.expiry = {};
c.$dwrClassMembers.activateKey = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.username = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_UserInactive", c);
dwr.engine._mappedClasses["MF_UserInactive"] = c;
addedNow["MF_UserInactive"] = true;
}

if (!dwr.engine._mappedClasses["MF_WorkflowBoard"]) {
c = function() {
this.clientid = null;
this.name = null;
this.workflowItemList = null;
this.sortDate = 0;
this.id = null;
this.projectId = null;
}
c.$dwrClassName = 'MF_WorkflowBoard';
c.$dwrClassMembers = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.name = {};
c.$dwrClassMembers.workflowItemList = {};
c.$dwrClassMembers.sortDate = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.projectId = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_WorkflowBoard", c);
dwr.engine._mappedClasses["MF_WorkflowBoard"] = c;
addedNow["MF_WorkflowBoard"] = true;
}

if (!dwr.engine._mappedClasses["MF_WireframeTemplate"]) {
c = function() {
this.submitter = null;
this.featured = null;
this.abuse = null;
this.rating = 0;
this.title = null;
this.type = null;
this.tags = null;
this.premium = null;
this.downloads = 0;
this.width = 0;
this.privateObj = null;
this.id = null;
this.submitterName = null;
this.cid = null;
this.createDate = null;
this.height = 0;
}
c.$dwrClassName = 'MF_WireframeTemplate';
c.$dwrClassMembers = {};
c.$dwrClassMembers.submitter = {};
c.$dwrClassMembers.featured = {};
c.$dwrClassMembers.abuse = {};
c.$dwrClassMembers.rating = {};
c.$dwrClassMembers.title = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.tags = {};
c.$dwrClassMembers.premium = {};
c.$dwrClassMembers.downloads = {};
c.$dwrClassMembers.width = {};
c.$dwrClassMembers.privateObj = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.submitterName = {};
c.$dwrClassMembers.cid = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.height = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_WireframeTemplate", c);
dwr.engine._mappedClasses["MF_WireframeTemplate"] = c;
addedNow["MF_WireframeTemplate"] = true;
}

if (!dwr.engine._mappedClasses["MF_LicenseData"]) {
c = function() {
this.licenses = null;
this.userLicenses = null;
}
c.$dwrClassName = 'MF_LicenseData';
c.$dwrClassMembers = {};
c.$dwrClassMembers.licenses = {};
c.$dwrClassMembers.userLicenses = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_LicenseData", c);
dwr.engine._mappedClasses["MF_LicenseData"] = c;
addedNow["MF_LicenseData"] = true;
}

if (!dwr.engine._mappedClasses["MF_TeamMember"]) {
c = function() {
this.license = null;
this.id = null;
this.type = null;
this.userid = null;
}
c.$dwrClassName = 'MF_TeamMember';
c.$dwrClassMembers = {};
c.$dwrClassMembers.license = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.userid = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_TeamMember", c);
dwr.engine._mappedClasses["MF_TeamMember"] = c;
addedNow["MF_TeamMember"] = true;
}

if (!dwr.engine._mappedClasses["MF_StoreTemplate"]) {
c = function() {
this.submitter = null;
this.featured = null;
this.images = null;
this.itemType = null;
this.clientId = null;
this.data = null;
this.includeCommon = null;
this.description = null;
this.type = null;
this.imagePresent = null;
this.packId = null;
this.approved = null;
this.downloads = 0;
this.name = null;
this.customFonts = null;
this.id = null;
this.submitterName = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_StoreTemplate';
c.$dwrClassMembers = {};
c.$dwrClassMembers.submitter = {};
c.$dwrClassMembers.featured = {};
c.$dwrClassMembers.images = {};
c.$dwrClassMembers.itemType = {};
c.$dwrClassMembers.clientId = {};
c.$dwrClassMembers.data = {};
c.$dwrClassMembers.includeCommon = {};
c.$dwrClassMembers.description = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.imagePresent = {};
c.$dwrClassMembers.packId = {};
c.$dwrClassMembers.approved = {};
c.$dwrClassMembers.downloads = {};
c.$dwrClassMembers.name = {};
c.$dwrClassMembers.customFonts = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.submitterName = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_StoreTemplate", c);
dwr.engine._mappedClasses["MF_StoreTemplate"] = c;
addedNow["MF_StoreTemplate"] = true;
}

if (!dwr.engine._mappedClasses["MF_Powerup"]) {
c = function() {
this.installed = null;
this.creator = null;
this.description = null;
this.source = null;
this.detailsMarkdown = null;
this.mode = null;
this.license = null;
this.name = null;
this.isPublic = null;
this.details = null;
this.sortorder = 0;
this.id = null;
this.installationid = null;
this.category = null;
this.slug = null;
}
c.$dwrClassName = 'MF_Powerup';
c.$dwrClassMembers = {};
c.$dwrClassMembers.installed = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.description = {};
c.$dwrClassMembers.source = {};
c.$dwrClassMembers.detailsMarkdown = {};
c.$dwrClassMembers.mode = {};
c.$dwrClassMembers.license = {};
c.$dwrClassMembers.name = {};
c.$dwrClassMembers.isPublic = {};
c.$dwrClassMembers.details = {};
c.$dwrClassMembers.sortorder = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.installationid = {};
c.$dwrClassMembers.category = {};
c.$dwrClassMembers.slug = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Powerup", c);
dwr.engine._mappedClasses["MF_Powerup"] = c;
addedNow["MF_Powerup"] = true;
}

if (!dwr.engine._mappedClasses["MF_PowerupScreenshot"]) {
c = function() {
this.filetype = null;
this.creator = null;
this.powerupid = null;
this.sortorder = null;
this.id = null;
this.mediatype = null;
}
c.$dwrClassName = 'MF_PowerupScreenshot';
c.$dwrClassMembers = {};
c.$dwrClassMembers.filetype = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.powerupid = {};
c.$dwrClassMembers.sortorder = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.mediatype = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_PowerupScreenshot", c);
dwr.engine._mappedClasses["MF_PowerupScreenshot"] = c;
addedNow["MF_PowerupScreenshot"] = true;
}

if (!dwr.engine._mappedClasses["MF_Revision"]) {
c = function() {
this.note = null;
this.auto = null;
this.creator = null;
this.data = null;
this.company = null;
this.id = null;
this.recovery = null;
this.pageid = null;
this.projectid = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_Revision';
c.$dwrClassMembers = {};
c.$dwrClassMembers.note = {};
c.$dwrClassMembers.auto = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.data = {};
c.$dwrClassMembers.company = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.recovery = {};
c.$dwrClassMembers.pageid = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Revision", c);
dwr.engine._mappedClasses["MF_Revision"] = c;
addedNow["MF_Revision"] = true;
}

if (!dwr.engine._mappedClasses["MF_ChatMember"]) {
c = function() {
this.name = null;
this.type = null;
this.userid = null;
}
c.$dwrClassName = 'MF_ChatMember';
c.$dwrClassMembers = {};
c.$dwrClassMembers.name = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.userid = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_ChatMember", c);
dwr.engine._mappedClasses["MF_ChatMember"] = c;
addedNow["MF_ChatMember"] = true;
}

if (!dwr.engine._mappedClasses["MF_SharePerm"]) {
c = function() {
this.canPreviewRevision = null;
this.canUploadImage = null;
this.canViewMembers = null;
this.canDeleteImage = null;
this.canChat = null;
this.canExportData = null;
this.canChangeSiteMap = null;
this.canDeleteRevision = null;
this.canViewLog = null;
this.canDuplicateProject = null;
}
c.$dwrClassName = 'MF_SharePerm';
c.$dwrClassMembers = {};
c.$dwrClassMembers.canPreviewRevision = {};
c.$dwrClassMembers.canUploadImage = {};
c.$dwrClassMembers.canViewMembers = {};
c.$dwrClassMembers.canDeleteImage = {};
c.$dwrClassMembers.canChat = {};
c.$dwrClassMembers.canExportData = {};
c.$dwrClassMembers.canChangeSiteMap = {};
c.$dwrClassMembers.canDeleteRevision = {};
c.$dwrClassMembers.canViewLog = {};
c.$dwrClassMembers.canDuplicateProject = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_SharePerm", c);
dwr.engine._mappedClasses["MF_SharePerm"] = c;
addedNow["MF_SharePerm"] = true;
}

if (!dwr.engine._mappedClasses["MF_WorkflowItem"]) {
c = function() {
this.clientid = null;
this.boardid = null;
this.sortDate = 0;
this.id = null;
this.projectId = null;
}
c.$dwrClassName = 'MF_WorkflowItem';
c.$dwrClassMembers = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.boardid = {};
c.$dwrClassMembers.sortDate = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.projectId = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_WorkflowItem", c);
dwr.engine._mappedClasses["MF_WorkflowItem"] = c;
addedNow["MF_WorkflowItem"] = true;
}

if (!dwr.engine._mappedClasses["MF_Project"]) {
c = function() {
this.enableComments = null;
this.compressedData = [];
this.updateDate = null;
this.data = null;
this.stamp = null;
this.title = null;
this.isdeleted = null;
this.sharedClient = null;
this.archived = 0;
this.checkPermission = null;
this.pages = null;
this.enableExport = null;
this.permitted = null;
this.readonly = null;
this.members = 0;
this.shareDisabled = null;
this.collaborators = null;
this.company = null;
this.share = null;
this.id = null;
this.sharePerm = null;
this.createDate = null;
this.isBasic = null;
this.collaboratorsOld = null;
this.permissionType = null;
this.creator = null;
this.realtime = null;
this.comments = 0;
this.deletedon = null;
this.sharePermOld = null;
this.published = null;
this.revision = null;
this.publicURL = null;
this.category = null;
this.urlview = null;
this.flash = null;
this.font = null;
}
c.$dwrClassName = 'MF_Project';
c.$dwrClassMembers = {};
c.$dwrClassMembers.enableComments = {};
c.$dwrClassMembers.compressedData = {};
c.$dwrClassMembers.updateDate = {};
c.$dwrClassMembers.data = {};
c.$dwrClassMembers.stamp = {};
c.$dwrClassMembers.title = {};
c.$dwrClassMembers.isdeleted = {};
c.$dwrClassMembers.sharedClient = {};
c.$dwrClassMembers.archived = {};
c.$dwrClassMembers.checkPermission = {};
c.$dwrClassMembers.pages = {};
c.$dwrClassMembers.enableExport = {};
c.$dwrClassMembers.permitted = {};
c.$dwrClassMembers.readonly = {};
c.$dwrClassMembers.members = {};
c.$dwrClassMembers.shareDisabled = {};
c.$dwrClassMembers.collaborators = {};
c.$dwrClassMembers.company = {};
c.$dwrClassMembers.share = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.sharePerm = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.isBasic = {};
c.$dwrClassMembers.collaboratorsOld = {};
c.$dwrClassMembers.permissionType = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.realtime = {};
c.$dwrClassMembers.comments = {};
c.$dwrClassMembers.deletedon = {};
c.$dwrClassMembers.sharePermOld = {};
c.$dwrClassMembers.published = {};
c.$dwrClassMembers.revision = {};
c.$dwrClassMembers.publicURL = {};
c.$dwrClassMembers.category = {};
c.$dwrClassMembers.urlview = {};
c.$dwrClassMembers.flash = {};
c.$dwrClassMembers.font = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Project", c);
dwr.engine._mappedClasses["MF_Project"] = c;
addedNow["MF_Project"] = true;
}

if (!dwr.engine._mappedClasses["MF_CustomFont"]) {
c = function() {
this.preview = null;
this.filetype = null;
this.creator = null;
this.clientid = null;
this.filename = null;
this.filesize = null;
this.id = null;
this.projectid = null;
}
c.$dwrClassName = 'MF_CustomFont';
c.$dwrClassMembers = {};
c.$dwrClassMembers.preview = {};
c.$dwrClassMembers.filetype = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.filename = {};
c.$dwrClassMembers.filesize = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.projectid = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_CustomFont", c);
dwr.engine._mappedClasses["MF_CustomFont"] = c;
addedNow["MF_CustomFont"] = true;
}

if (!dwr.engine._mappedClasses["MF_PackData"]) {
c = function() {
this.comppacks = null;
this.sortpacks = null;
}
c.$dwrClassName = 'MF_PackData';
c.$dwrClassMembers = {};
c.$dwrClassMembers.comppacks = {};
c.$dwrClassMembers.sortpacks = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_PackData", c);
dwr.engine._mappedClasses["MF_PackData"] = c;
addedNow["MF_PackData"] = true;
}

if (!dwr.engine._mappedClasses["MF_License"]) {
c = function() {
this.period = null;
this.clientid = null;
this.cost = 0;
this.edition = null;
this.id = null;
this.users = 0;
this.createDate = null;
this.status = null;
this.txnID = null;
}
c.$dwrClassName = 'MF_License';
c.$dwrClassMembers = {};
c.$dwrClassMembers.period = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.cost = {};
c.$dwrClassMembers.edition = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.users = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.status = {};
c.$dwrClassMembers.txnID = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_License", c);
dwr.engine._mappedClasses["MF_License"] = c;
addedNow["MF_License"] = true;
}

if (!dwr.engine._mappedClasses["MF_Feedback"]) {
c = function() {
this.creator = null;
this.pos = null;
this.attached = null;
this.creatorName = null;
this.comment = null;
this.id = null;
this.message = null;
this.pageid = null;
this.reply = null;
this.projectid = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_Feedback';
c.$dwrClassMembers = {};
c.$dwrClassMembers.creator = {};
c.$dwrClassMembers.pos = {};
c.$dwrClassMembers.attached = {};
c.$dwrClassMembers.creatorName = {};
c.$dwrClassMembers.comment = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.message = {};
c.$dwrClassMembers.pageid = {};
c.$dwrClassMembers.reply = {};
c.$dwrClassMembers.projectid = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Feedback", c);
dwr.engine._mappedClasses["MF_Feedback"] = c;
addedNow["MF_Feedback"] = true;
}
})();

(function() {
if (dwr.engine._getObject("MF_ProjectManagerFlash") == undefined) {
var p;

p = {};






p.getProjectInfoData = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'MF_ProjectManagerFlash', 'getProjectInfoData', arguments);
};









p.copyProject = function(p0, p1, p2, p3, p4, callback) {
return dwr.engine._execute(p._path, 'MF_ProjectManagerFlash', 'copyProject', arguments);
};








p.copyProject = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'MF_ProjectManagerFlash', 'copyProject', arguments);
};







p.share = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'MF_ProjectManagerFlash', 'share', arguments);
};






p.deleteSharedMockup = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'MF_ProjectManagerFlash', 'deleteSharedMockup', arguments);
};







p.deleteMockup = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'MF_ProjectManagerFlash', 'deleteMockup', arguments);
};







p.rename = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'MF_ProjectManagerFlash', 'rename', arguments);
};








p.duplicate = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'MF_ProjectManagerFlash', 'duplicate', arguments);
};

dwr.engine._setObject("MF_ProjectManagerFlash", p);
}
})();

