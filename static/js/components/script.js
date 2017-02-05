const html = require('choo/html');
const find = require('lodash/find');
const scriptLine = require('./scriptLine.js');

module.exports = (contact, state, prev, send) => {
	  const issue = find(state.issues, ['id', state.location.params.issueid]);
	  const currentContact = issue.contacts[state.contactIndex];

    if (currentContact != null) {
      return html`
      <div class="call__script">
        <h3 class="call__script__header">Your script:</h3>
        <div class="call__script__body">${issue.script.split('\n').map((line) => scriptLine(line, state, prev, send))}</div>
      </div>`
    } else {
      return html``
    }
}
