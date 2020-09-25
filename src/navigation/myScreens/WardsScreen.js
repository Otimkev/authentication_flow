import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import MaternityWard from './Wards/MaternityWard';

const LeftContent = (props) => <Avatar.Icon {...props} icon="heart" />;
const RightContent = (props) => <Avatar.Icon {...props} icon="home" />;

const WardsScreen = ({navigation}) => (
  <View>
    <TouchableOpacity onPress={() => navigation.navigate('MaternityWard')}>
      <Card>
        <Card.Title
          title="Marternity Ward"
          subtitle="Pregnancy"
          left={RightContent}
        />
        <Card.Content>
          <Title>8 beds</Title>
          <Paragraph>2 patients</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
    {/* <View>
      <Card>
        <Card.Title
          title="Marternity Ward"
          subtitle="Pregnancy"
          left={RightContent}
        />
        <Card.Content>
          <Title>8 beds</Title>
          <Paragraph>2 patients</Paragraph>
        </Card.Content>
      </Card>
    </View> */}
    {/* <View>
      <Card>
        <Card.Title
          title="Cardiology Ward"
          subtitle="Heart"
          left={LeftContent}
        />
        <Card.Content>
          <Title>8 beds</Title>
          <Paragraph>2 patients</Paragraph>
        </Card.Content>
      </Card>
    </View> */}
    {/* <View>
      <Card>
        <Card.Title
          title="Intensive Care Unit"
          subtitle="Critical Care"
          left={LeftContent}
        />
        <Card.Content>
          <Title>8 beds</Title>
          <Paragraph>2 patients</Paragraph>
        </Card.Content>
      </Card>
    </View> */}
  </View>
);

export default WardsScreen;
