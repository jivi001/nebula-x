import test from 'node:test';
import assert from 'node:assert/strict';
import { artifacts, getArtifactsByBody, getArtifactById } from '../src/data/artifacts.js';

test('catalog has unique artifact ids and NASA source links', () => {
  const ids = artifacts.map(({ id }) => id);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(artifacts.length >= 20);
  for (const artifact of artifacts) {
    assert.ok(artifact.sourceUrl.startsWith('https://'), `${artifact.id} needs a source URL`);
    assert.ok(artifact.name && artifact.mission && artifact.narrative, `${artifact.id} needs story fields`);
    assert.ok(Array.isArray(artifact.facts) && artifact.facts.length > 0, `${artifact.id} needs facts`);
  }
});

test('catalog lookup returns correct bodies and artifact ids', () => {
  assert.ok(getArtifactsByBody('Moon').length > 0);
  assert.ok(getArtifactsByBody('Mars').length > 0);
  assert.ok(getArtifactsByBody('Deep Space').length > 0);
  assert.equal(getArtifactById('ingenuity').name, 'Ingenuity Helicopter');
  assert.equal(getArtifactById('not-found'), undefined);
});

test('mission dates and status are internally consistent', () => {
  for (const artifact of artifacts) {
    assert.ok(['active', 'inactive'].includes(artifact.status), `${artifact.id} has invalid status`);
    assert.ok(Number.isFinite(Date.parse(artifact.landingDate)), `${artifact.id} needs a valid landing date`);
    if (artifact.status === 'inactive') assert.ok(artifact.endDate, `${artifact.id} needs a mission end date`);
    if (artifact.status === 'active') assert.equal(artifact.endDate, null, `${artifact.id} should not have an end date`);
  }
});