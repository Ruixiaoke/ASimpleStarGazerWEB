import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      variant: {
        default:
          'bg-secondary text-secondary-foreground shadow-soft hover:shadow-ring hover:bg-secondary/90',
        primary:
          'bg-primary text-primary-foreground shadow-soft hover:shadow-ring hover:bg-primary/90',
        outline: 'border border-border bg-transparent text-foreground hover:bg-primary/10',
        ghost: 'hover:bg-primary/10 hover:text-foreground',
        link: 'text-secondary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-6 py-2 text-base',
        sm: 'h-9 px-4 text-sm',
        lg: 'h-12 px-8 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

