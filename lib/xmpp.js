var Client = require('./xmpp/client').Client;
var Component = require('./xmpp/component').Component;
var JID = require('./xmpp/jid').JID;
var XML = require('./xmpp/xml');

exports.Client = Client;
exports.Component = Component;
exports.JID = JID;
exports.XML = XML;
exports.Element = XML.Element;
