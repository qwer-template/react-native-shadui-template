import { Sun, X, LucideIcon } from 'lucide-react-native';
import { iconWithClassName } from './iconWithClassName';

export type Icon = LucideIcon;

const icons = {
    sun: Sun,
    x: X
};

Object.values(icons).forEach(icon => iconWithClassName(icon));

export const Icons = icons;