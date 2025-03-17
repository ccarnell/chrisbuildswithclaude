declare module 'motion/react' {
  import { 
    motion as framerMotion,
    AnimatePresence,
    MotionConfig,
    Transition,
    Variant,
    Variants,
    TargetAndTransition,
    SpringOptions,
    useSpring,
    useMotionValue,
    useTransform,
    useScroll,
    AnimatePresenceProps
  } from 'framer-motion';
  
  export {
    framerMotion as motion,
    AnimatePresence,
    MotionConfig,
    Transition,
    Variant,
    Variants,
    TargetAndTransition,
    SpringOptions,
    useSpring,
    useMotionValue,
    useTransform,
    useScroll,
    AnimatePresenceProps
  };
}