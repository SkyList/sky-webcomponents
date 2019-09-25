import { storiesOf } from '@storybook/polymer'
import {
  withKnobs,
  color,
  number,
} from '@storybook/addon-knobs/polymer'
import { withMarkdownNotes } from '@storybook/addon-notes'
import './index'

storiesOf('sky-looader', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const loading = document.createElement('sky-loader')

    loading.setAttribute('color', color('color', 'red'))
    loading.setAttribute('speed', number('speed', 2000))
    loading.setAttribute('size', number('size', 32))

    return loading
  })
