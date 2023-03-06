import { ActionPanel, Action, Icon, List, Detail } from "@raycast/api";

const testCJKItems = [
  {
    id: 0,
    title: "Test",
    subtitle: "Test",
    accessory: "Test",
  },
  {
    id: 1,
    // japanese
    title: "テスト",
    subtitle: "テスト",
    accessory: "テスト",
  },
  {
    id: 2,
    // korean
    title: "테스트",
    subtitle: "테스트",
    accessory: "테스트",
  },
  {
    id: 3,
    // chinese
    title: "測試",
    subtitle: "測試",
    accessory: "測試",
  },
];


export default function Command() {
  return (
    <List>
      {testCJKItems.map((item) => (
        <List.Item
          key={item.id}
          icon="list-icon.png"
          title={item.title}
          subtitle={item.subtitle}
          accessories={[{ icon: Icon.Text, text: item.accessory }]}
          actions={
            <ActionPanel>
              <Action.Push title="Test title" target={<Detail markdown={item.title} />} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
