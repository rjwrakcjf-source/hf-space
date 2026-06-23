import React from 'react';

export function Container({ children, maxWidth = '1200px', className = '' }) {
  return (
    <div style={{ maxWidth, margin: '0 auto', padding: '0 1rem' }} className={className}>
      {children}
    </div>
  );
}

export function Grid({ children, columns = 1, gap = '1rem', className = '' }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap }} className={className}>
      {children}
    </div>
  );
}

export function Flex({ children, direction = 'row', gap = '0', align = 'stretch', justify = 'start', className = '' }) {
  return (
    <div style={{ display: 'flex', flexDirection: direction, gap, alignItems: align, justifyContent: justify }} className={className}>
      {children}
    </div>
  );
}

export function Stack({ children, gap = '1rem', className = '' }) {
  return <Flex direction="column" gap={gap} className={className}>{children}</Flex>;
}
