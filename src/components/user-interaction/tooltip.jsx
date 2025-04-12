import { Tooltip as ChakraTooltip, Portal } from '@chakra-ui/react';
import * as React from 'react';
import PropTypes from 'prop-types';

export const Tooltip = React.forwardRef(function Tooltip(props, ref) {
  const {
    showArrow,
    children,
    disabled,
    portalled,
    content,
    contentProps,
    portalRef,
    ...rest
  } = props;

  if (disabled) return children;

  return (
    <ChakraTooltip.Root {...rest}>
      <ChakraTooltip.Trigger asChild>{children}</ChakraTooltip.Trigger>
      <Portal disabled={!portalled} container={portalRef}>
        <ChakraTooltip.Positioner>
          <ChakraTooltip.Content ref={ref} {...contentProps}>
            {showArrow && (
              <ChakraTooltip.Arrow>
                <ChakraTooltip.ArrowTip />
              </ChakraTooltip.Arrow>
            )}
            {content}
          </ChakraTooltip.Content>
        </ChakraTooltip.Positioner>
      </Portal>
    </ChakraTooltip.Root>
  );
});

Tooltip.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
  contentProps: PropTypes.object,
  disabled: PropTypes.bool,
  portalled: PropTypes.bool,
  portalRef: PropTypes.func,
  showArrow: PropTypes.bool,
};
