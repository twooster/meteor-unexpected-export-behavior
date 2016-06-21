console.log('export-test package contents: ', Package['export-test']);

try {
  console.log('Value of WillWork: ', WillWork);
} catch(e) { console.log('[Does not happen]: Failed to read WillWork'); }

try {
  console.log('Value of WillFail: ', WillFail);
} catch(e) { console.log('[Always happens]: Failed to read WillFail'); }
