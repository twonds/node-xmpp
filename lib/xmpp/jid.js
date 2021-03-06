function JID(a, b, c) {
    if (a && b == null && c == null) {
	this.parseJID(a);
    } else if (a && b) {
	this.user = a;
	this.domain = b;
	this.resource = c;
    }
}

JID.prototype.parseJID = function(s) {
    if (s.indexOf('@') >= 0) {
	this.user = s.substr(0, s.indexOf('@'));
	s = s.substr(s.indexOf('@') + 1);
    }
    if (s.indexOf('/') >= 0) {
	this.resource = s.substr(s.indexOf('/') + 1);
	s = s.substr(0, s.indexOf('/'));
    }
    this.domain = s;
};

JID.prototype.toString = function() {
    var s = this.domain;
    if (this.user)
	s = this.user + '@' + s;
    if (this.resource)
	s = s + '/' + this.resource;
    return s;
};

JID.prototype.bare = function() {
    if (this.resource)
	return new JID(this.user, this.domain, null);
    else
	return this;
};

exports.JID = JID;
