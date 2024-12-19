import { Sun, X, LucideIcon, User, Home, Compass, MessageCircle } from 'lucide-react-native';
import { iconWithClassName } from './iconWithClassName';

export type Icon = LucideIcon;

const icons = {
    home: Home,
    discover: Compass,
    message: MessageCircle,
    profile: User,
};

Object.values(icons).forEach(icon => iconWithClassName(icon));

export const Icons = icons;