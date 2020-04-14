if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
var c;
var addedNow = [];

if (!dwr.engine._mappedClasses["MF_User"]) {
c = function() {
this.lastLogin = null;
this.lastName = null;
this.accountType = null;
this.companyName = null;
this.projectsLeft = 0;
this.pid = null;
this.teamLicenseOwner = null;
this.storage = null;
this.isTrial = null;
this.plusEdition = null;
this.type = null;
this.emailAlert = null;
this.firstName = null;
this.password = null;
this.tokenKey = null;
this.company = null;
this.daysLeft = 0;
this.hadTrial = null;
this.teamEditor = null;
this.teamPremium = null;
this.createDate = null;
this.isBasic = null;
this.username = null;
}
c.$dwrClassName = 'MF_User';
c.$dwrClassMembers = {};
c.$dwrClassMembers.lastLogin = {};
c.$dwrClassMembers.lastName = {};
c.$dwrClassMembers.accountType = {};
c.$dwrClassMembers.companyName = {};
c.$dwrClassMembers.projectsLeft = {};
c.$dwrClassMembers.pid = {};
c.$dwrClassMembers.teamLicenseOwner = {};
c.$dwrClassMembers.storage = {};
c.$dwrClassMembers.isTrial = {};
c.$dwrClassMembers.plusEdition = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.emailAlert = {};
c.$dwrClassMembers.firstName = {};
c.$dwrClassMembers.password = {};
c.$dwrClassMembers.tokenKey = {};
c.$dwrClassMembers.company = {};
c.$dwrClassMembers.daysLeft = {};
c.$dwrClassMembers.hadTrial = {};
c.$dwrClassMembers.teamEditor = {};
c.$dwrClassMembers.teamPremium = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.isBasic = {};
c.$dwrClassMembers.username = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_User", c);
dwr.engine._mappedClasses["MF_User"] = c;
addedNow["MF_User"] = true;
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

if (!dwr.engine._mappedClasses["MF_SSOSettings"]) {
c = function() {
this.issuerid = null;
this.clientid = null;
this.provider = null;
this.signinurl = null;
this.certificate = null;
this.enabled = false;
this.createDate = null;
}
c.$dwrClassName = 'MF_SSOSettings';
c.$dwrClassMembers = {};
c.$dwrClassMembers.issuerid = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.provider = {};
c.$dwrClassMembers.signinurl = {};
c.$dwrClassMembers.certificate = {};
c.$dwrClassMembers.enabled = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_SSOSettings", c);
dwr.engine._mappedClasses["MF_SSOSettings"] = c;
addedNow["MF_SSOSettings"] = true;
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
this.role = null;
this.id = null;
this.email = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_LicenseUser';
c.$dwrClassMembers = {};
c.$dwrClassMembers.clientid = {};
c.$dwrClassMembers.role = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.email = {};
c.$dwrClassMembers.createDate = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_LicenseUser", c);
dwr.engine._mappedClasses["MF_LicenseUser"] = c;
addedNow["MF_LicenseUser"] = true;
}

if (!dwr.engine._mappedClasses["MF_StoreTemplate"]) {
c = function() {
this.submitter = null;
this.featured = null;
this.itemType = null;
this.clientId = null;
this.data = null;
this.description = null;
this.type = null;
this.imagePresent = null;
this.packId = null;
this.approved = null;
this.downloads = 0;
this.name = null;
this.id = null;
this.submitterName = null;
this.createDate = null;
}
c.$dwrClassName = 'MF_StoreTemplate';
c.$dwrClassMembers = {};
c.$dwrClassMembers.submitter = {};
c.$dwrClassMembers.featured = {};
c.$dwrClassMembers.itemType = {};
c.$dwrClassMembers.clientId = {};
c.$dwrClassMembers.data = {};
c.$dwrClassMembers.description = {};
c.$dwrClassMembers.type = {};
c.$dwrClassMembers.imagePresent = {};
c.$dwrClassMembers.packId = {};
c.$dwrClassMembers.approved = {};
c.$dwrClassMembers.downloads = {};
c.$dwrClassMembers.name = {};
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
this.details = null;
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
c.$dwrClassMembers.details = {};
c.$dwrClassMembers.id = {};
c.$dwrClassMembers.installationid = {};
c.$dwrClassMembers.category = {};
c.$dwrClassMembers.slug = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_Powerup", c);
dwr.engine._mappedClasses["MF_Powerup"] = c;
addedNow["MF_Powerup"] = true;
}

if (!dwr.engine._mappedClasses["MF_DashboardData"]) {
c = function() {
this.logshared = null;
}
c.$dwrClassName = 'MF_DashboardData';
c.$dwrClassMembers = {};
c.$dwrClassMembers.logshared = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_DashboardData", c);
dwr.engine._mappedClasses["MF_DashboardData"] = c;
addedNow["MF_DashboardData"] = true;
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

if (!dwr.engine._mappedClasses["MF_UserInactive"]) {
c = function() {
this.firstName = null;
this.lastName = null;
this.password = null;
this.companyName = null;
this.recaptcha = null;
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
c.$dwrClassMembers.recaptcha = {};
c.$dwrClassMembers.expiry = {};
c.$dwrClassMembers.activateKey = {};
c.$dwrClassMembers.createDate = {};
c.$dwrClassMembers.username = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_UserInactive", c);
dwr.engine._mappedClasses["MF_UserInactive"] = c;
addedNow["MF_UserInactive"] = true;
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

if (!dwr.engine._mappedClasses["MF_AdminAnalyticsData"]) {
c = function() {
this.counts = null;
this.labels = null;
}
c.$dwrClassName = 'MF_AdminAnalyticsData';
c.$dwrClassMembers = {};
c.$dwrClassMembers.counts = {};
c.$dwrClassMembers.labels = {};
c.createFromMap = dwr.engine._createFromMap;
dwr.engine._setObject("MF_AdminAnalyticsData", c);
dwr.engine._mappedClasses["MF_AdminAnalyticsData"] = c;
addedNow["MF_AdminAnalyticsData"] = true;
}
})();

(function() {
if (dwr.engine._getObject("MF_LicenseManager") == undefined) {
var p;

p = {};






p.getCompanyDetails = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'MF_LicenseManager', 'getCompanyDetails', arguments);
};




p.correctRenewalDates = function(callback) {
return dwr.engine._execute(p._path, 'MF_LicenseManager', 'correctRenewalDates', arguments);
};







p.getLicenseData = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'MF_LicenseManager', 'getLicenseData', arguments);
};













p.addLicenseADMIN = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, callback) {
return dwr.engine._execute(p._path, 'MF_LicenseManager', 'addLicenseADMIN', arguments);
};













p.addTrialLicenseADMIN = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, callback) {
return dwr.engine._execute(p._path, 'MF_LicenseManager', 'addTrialLicenseADMIN', arguments);
};






p.getLicenseDetailsADMIN = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'MF_LicenseManager', 'getLicenseDetailsADMIN', arguments);
};





p.getTotalLicenseCountsADMIN = function(p0, callback) {
return dwr.engine._execute(p._path, 'MF_LicenseManager', 'getTotalLicenseCountsADMIN', arguments);
};





p.getLicensesByWeekADMIN = function(p0, callback) {
return dwr.engine._execute(p._path, 'MF_LicenseManager', 'getLicensesByWeekADMIN', arguments);
};





p.getLicensesByMonthADMIN = function(p0, callback) {
return dwr.engine._execute(p._path, 'MF_LicenseManager', 'getLicensesByMonthADMIN', arguments);
};







p.changeLicenseApplyADMIN = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'MF_LicenseManager', 'changeLicenseApplyADMIN', arguments);
};






p.refundLicenseADMIN = function(p0, p1, callback) {
return dwr.engine._execute(p._path, 'MF_LicenseManager', 'refundLicenseADMIN', arguments);
};





p.regularOperationsADMIN = function(p0, callback) {
return dwr.engine._execute(p._path, 'MF_LicenseManager', 'regularOperationsADMIN', arguments);
};







p.addLicenseUser = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'MF_LicenseManager', 'addLicenseUser', arguments);
};







p.deleteLicenseUser = function(p0, p1, p2, callback) {
return dwr.engine._execute(p._path, 'MF_LicenseManager', 'deleteLicenseUser', arguments);
};








p.updateLicenseUserRole = function(p0, p1, p2, p3, callback) {
return dwr.engine._execute(p._path, 'MF_LicenseManager', 'updateLicenseUserRole', arguments);
};

dwr.engine._setObject("MF_LicenseManager", p);
}
})();

