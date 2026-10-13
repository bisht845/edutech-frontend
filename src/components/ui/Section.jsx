import { cn } from '../../lib/utils';
import Container from './Container';

export default function Section({ id, className, containerClassName, children, as: Tag = 'section' }) {
  return (
    <Tag id={id} className={cn('py-4 sm:py-6 lg:py-6', className)}>
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}
