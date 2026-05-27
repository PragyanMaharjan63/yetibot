import {
  BatteryCharging,
  Bot,
  CircuitBoard,
  Gauge,
  MapPin,
  Radio,
} from "lucide-react";

export const videos = [
  {
    title: "Prototype run",
    label: "Movement test",
    src: "/resources/yetiebothero.mp4",
    text: "See the bot moving in a real test setup with its compact build on display.",
  },
  {
    title: "Control check",
    label: "Live behavior",
    src: "/resources/yetibotTouch.mp4",
    text: "A closer look at how the bot responds while the prototype is being tested.",
  },
  {
    title: "Build detail",
    label: "Variant view",
    src: "/resources/yetiebothero.mp4",
    text: "Use this clip to understand the shape, parts, and practical feel of the robot.",
  },
];

export const variants = [
  {
    name: "Explorer",
    tag: "Starter",
    icon: Bot,
    description:
      "A lightweight build for learning movement, turns, and sensor basics.",
    points: ["Simple chassis", "Easy battery swap", "Classroom friendly"],
  },
  {
    name: "Scout",
    tag: "Balanced",
    icon: Radio,
    description:
      "A tidy all-rounder for demos, obstacle tests, and quick experiments.",
    points: ["Stable motion", "Sensor-ready", "Clean wiring layout"],
  },
  {
    name: "Builder",
    tag: "Expandable",
    icon: CircuitBoard,
    description:
      "A flexible version for adding modules, custom logic, and extra sensors.",
    points: ["Room for add-ons", "Modular platform", "Project-ready"],
  },
];

export const steps = [
  {
    title: "Sense",
    icon: MapPin,
    body: "Touch sensor read the touch on the surface of the robot.",
  },
  {
    title: "Think",
    icon: CircuitBoard,
    body: "The controller compares live input with the behavior you programmed.",
  },
  {
    title: "Animation",
    icon: Gauge,
    body: "The robot displays the animation depending on your input",
  },
  {
    title: "Repeat",
    icon: BatteryCharging,
    body: "Fast feedback loops keep the movement steady and easy to tune.",
  },
];
