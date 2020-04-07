import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | animated-dots', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders an element with class animation', async function (assert) {

    await render(hbs`<AnimatedDots />`);

    assert.dom('.animation').exists();
  });
});
