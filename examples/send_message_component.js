require.paths.push('../lib');
var sys = require('sys');
var xmpp = require('xmpp');
var argv = process.argv;

if (argv.length < 6) {
    sys.puts('Usage: node send_message.js <my-jid> <my-password> <server> <port> <my-text> <jid1> [jid2] ... [jidN]');
    process.exit(1);
}

var c = new xmpp.Component({ jid: argv[2],
			     password: argv[3],
			     host: argv[4],
			     port: Number(argv[5])
			   });
c.addListener('online',
	       function() {
		   argv.slice(7).forEach(
		       function(to) {
			   c.send(new xmpp.Element('message',
						   { to: to,
						     from: c.jid,
						     type: 'chat'}).
				  c('body').
				  t(argv[4]));
		       });
		   c.end();
	       });
c.addListener('authFail',
	       function() {
		   sys.puts("Authentication failure");
		   process.exit(1);
	       });
c.addListener('error',
	       function(e) {
		   sys.puts(e);
		   process.exit(1);
	       });
c.addListener('end',
	       function() {
		   /* node.js will exit by itself */
	       });
