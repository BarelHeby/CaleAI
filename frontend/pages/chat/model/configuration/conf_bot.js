import Activities from "../../../../assets/Activities";
const activities_options = Object.keys(Activities).map((key) => {
  return {
    type: "Button",
    label: Activities[key].label,
    emoji: Activities[key].emoji,
    value: Activities[key].label,
  };
});
// console.log(activities_buttons);
export default conf_bot = {
  greeting: {
    key: "greeting",
    bot_label: "Hello, I am Cale Bot. How can I help you today?",
    options: [
      {
        type: "Button",
        label: "Add Task",
        value: "add_task",
        successor: [
          {
            bot_label: "Great! What Category does the task belong to?",
            key: "category",
            options: activities_options,
          },
          {
            bot_label: "How Often do you want to do this task?",
            key: "frequency",
            options: [
              { type: "Button", label: "Daily", value: "daily" },
              { type: "Button", label: "Weekly", value: "weekly" },
              { type: "Button", label: "Monthly", value: "monthly" },
            ],
          },
          {
            bot_label: "How long do you want to spend on this task?",
            key: "duration",
            options: [
              {
                type: "text-hours-minutes",
                label: "Set Duration",
              },
            ],
          },
          {
            bot_label: "Is this task can be split into multiple days?",
            key: "split",
            options: [
              { type: "Button", label: "Yes", value: "yes" },
              { type: "Button", label: "No", value: "no" },
            ],
          },
        ],
      },
      {
        type: "Button",
        label: "Generate New Calendar",
        successor: [],
      },
    ],
  },
};
