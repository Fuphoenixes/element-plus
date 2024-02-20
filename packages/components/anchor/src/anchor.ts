import {
  buildProps,
  definePropType,
  isString,
  isUndefined,
} from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type Anchor from './anchor.vue'

export const anchorProps = buildProps({
  /**
   * @description scroll container
   */
  container: {
    type: definePropType<string | HTMLElement | Window | null>([
      String,
      Object,
    ]),
  },
  /**
   * @description Set the offset of the anchor scroll
   */
  offset: {
    type: Number,
    default: 0,
  },
  /**
   * @description The offset of the element starting to trigger the anchor
   */
  bound: {
    type: Number,
    default: 15,
  },
  /**
   * @description Scroll behavior
   */
  behavior: {
    type: definePropType<ScrollBehavior>(String),
    default: 'smooth',
  },
  /**
   * @description Whether to show the marker
   */
  marker: {
    type: Boolean,
    default: true,
  },
  /**
   * @description Set Anchor type
   */
  type: {
    type: definePropType<'defalut' | 'underline'>(String),
    default: 'defalut',
  },
  /**
   * @description Set Anchor direction
   */
  direction: {
    type: definePropType<'vertical' | 'horizontal'>(String),
    default: 'vertical',
  },
})

export type AnchorProps = ExtractPropTypes<typeof anchorProps>
export type AnchorInstance = InstanceType<typeof Anchor>

export const anchorEmits = {
  change: (href: string) => isString(href),
  click: (e: MouseEvent, href?: string) =>
    e instanceof MouseEvent && (isString(href) || isUndefined(href)),
}
export type AnchorEmits = typeof anchorEmits
