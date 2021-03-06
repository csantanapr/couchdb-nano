// Licensed under the Apache License, Version 2.0 (the 'License'); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

'use strict';

var replicator = require('../../helpers/unit').unit([
  'database',
  'replicator'
]);

replicator('baa', 'baashep', {
  body: '{"source":"baa","target":"baashep"}',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json'
  },
  method: 'POST',
  uri: '/_replicator'
});

replicator('molly', 'anne', {some: 'params'}, {
  body: '{"some":"params","source":"molly","target":"anne"}',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json'
  },
  method: 'POST',
  uri: '/_replicator'
});
