import React, { Component } from "react";
import ThemeProvider from "@react-ratel/core/ThemeProvider";
import DefaultTheme from "@react-ratel/core/Theme/DefaultTheme";
// style
import Reset from "@react-ratel/core/Reset";
import GlobalStyle from "@react-ratel/core/GlobalStyle";
// buttons
import Button from "@react-ratel/core/Button";
import DropdownButton from "@react-ratel/core/DropdownButton";
import RoundButton from "@react-ratel/core/RoundButton";
import StackedButton from "@react-ratel/core/StackedButton";
// zones
import Box from "@react-ratel/core/Box";
import BackgroundBox from "@react-ratel/core/BackgroundBox";
import UploadBox from "@react-ratel/core/UploadBox";
import Divider from "@react-ratel/core/Divider";
// fonts
import A from "@react-ratel/core/A";
import H1 from "@react-ratel/core/H1";
import H2 from "@react-ratel/core/H2";
import H4 from "@react-ratel/core/H4";
import P from "@react-ratel/core/P";
import Text from "@react-ratel/core/Text";
// spacing
import Padding from "@react-ratel/core/Padding";
import Margin from "@react-ratel/core/Margin";
// overlay
import Overlay from "@react-ratel/core/Overlay";
// icons
import Icon from "@react-ratel/core/Icon";
// layout
import Row from "@react-ratel/core/Row";
import Col from "@react-ratel/core/Col";
import Div from "@react-ratel/core/Div";
// tooltip
import Tooltip from "@react-ratel/core/Tooltip";
// form
import Input from "@react-ratel/core/Input";
import Label from "@react-ratel/core/Label";
import Textarea from "@react-ratel/core/Textarea";
import Select from "@react-ratel/core/Select";
import VirtualizedSelect from "@react-ratel/core/VirtualizedSelect";
import DatePicker from "@react-ratel/core/DatePicker";
import Switch from "@react-ratel/core/Switch";
// modal
import Modal from "@react-ratel/core/Modal";
// list
import List from "@react-ratel/core/List";
import ListItem from "@react-ratel/core/List/ListItem";
// loader
import Loader from "@react-ratel/core/Loader";
// card
import Card from "@react-ratel/core/Card";
// image
import BackgroundImage from "@react-ratel/core/BackgroundImage";
// alert
import Alert from "@react-ratel/core/Alert";
// tag
import Tag from "@react-ratel/core/Tag";
// toast
import Toast from "@react-ratel/core/Toast";
// progress
import Progress from "@react-ratel/core/Progress";
// Stats
import Gauge from "@react-ratel/core/Gauge";

import { ic_play_arrow } from "react-icons-kit/md/ic_play_arrow";
import { ic_whatshot } from "react-icons-kit/md/ic_whatshot";

const DarkTheme = {
  ...DefaultTheme,
  ...{
    body: {
      ...DefaultTheme.body,
      bg: "#1c1e2f",
      color: "#eef2f4",
    },
    color: {
      ...DefaultTheme.color,
      primary: "1,255,223", // 23,162,184 | 255,196,38 | 38,135,255
      secondary: "137,1,255",
      light: "34, 37, 55",
      white: "28, 30, 47",
      dark: "24,25,26",
      blue: "175, 200, 255",
      red: "255, 46, 93",
      yellow: "255, 225, 37",
      green: "175, 255, 177",
    },
    font: {
      ...DefaultTheme.font,
      family: "'Roboto', sans-serif",
      familyUrl: "https://fonts.googleapis.com/css?family=Roboto:400,500,800",
      size: "14px",
    },
    form: {
      ...DefaultTheme.form,
      color: "240, 243, 255",
      backgroundColor: "67, 75, 105",
      borderSize: "1px",
      borderColor: "56,62,92",
    },
    border: {
      ...DefaultTheme.border,
      color: "56,62,92",
      radius: "3px",
    },
  },
};

const MediaCard = () => (
  <Padding responsive inline>
    <Card width="18rem">
      <A href="/product/fr-FR/0e2a65a8-e881-40f3-9093-216b70b0ef8d">
        <BackgroundImage
          background="rgba(255,255,255,.2)"
          height="200px"
          src="https://storage.gra3.cloud.ovh.net/v1/AUTH_8f75d74f077b4b88b4aa7227d4ee5f6f/images/Splash-toys/0e2a65a8-e881-40f3-9093-216b70b0ef8d/c29b068d-d086-4eb5-a7c1-318b07bed8b1/3700514307639_2_PACKAGE_RECTO-Small.jpg"
        />
      </A>
      <Padding vertical={4} horizontal={3}>
        <Text block uppercase small spaced>
          Goliath
        </Text>
        <Margin bottom={2} />
        <A block dark>
          <Text bold>Jacknife Rouge Radiocommandée</Text>
        </A>
      </Padding>
    </Card>
  </Padding>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpened: false,
      selectedValue: null,
      selectedMultiValues: null,
      currentDate: null,
      showAlert: true,
      theme: DefaultTheme,
    };
  }

  render() {
    return (
      <div>
        <Reset />
        <ThemeProvider theme={this.state.theme}>
          <React.Fragment>
            <GlobalStyle />

            {/* Banner */}
            <BackgroundBox
              height="34rem"
              noPadding
              url="https://www.cinemaspathegaumont.com/assets/img/promo-slider/film-l-autre-regard.jpg"
            >
              <Overlay gradient>
                <Padding all={{ mobile: 3, tablet: 4, desktop: 6 }}>
                  <H1 color="#fff">Simple React components box</H1>
                  <Padding bottom={4}>
                    <P color="#eee" style={{ fontSize: "1.4rem" }} lead>
                      Simple, performant & dev-friendly UI library.
                    </P>
                  </Padding>
                  <Button
                    secondary
                    noShadow
                    onClick={() =>
                      this.setState({ ...this.state, theme: DarkTheme })
                    }
                  >
                    Dark theme
                  </Button>
                  <Button
                    primary
                    noShadow
                    onClick={() =>
                      this.setState({ ...this.state, theme: DefaultTheme })
                    }
                  >
                    Default theme
                  </Button>
                  <Button background dark noShadow>
                    &nbsp;&nbsp;Voir les informations
                  </Button>
                </Padding>
                <Margin bottom={5} />
              </Overlay>
            </BackgroundBox>

            {/* Main content */}
            <Box noPadding>
              <Padding horizontal={{ mobile: 0, tablet: 1, desktop: 6 }}>
                {/* Main area */}
                <Margin bottom={4} top={5}>
                  {/* <Box noPadding> */}
                  <Padding responsive>
                    {/* Buttons sm */}
                    <H2>Buttons</H2>
                    <Box responsive>
                      <Button>J'accepte</Button>
                      <Button primary small>
                        Test
                      </Button>
                      <Button secondary>Réinitialiser les filtres</Button>
                      <Button light>Annuler la recherche</Button>
                      <Button primary as="a" href="https://reactjs.org/">
                        I am a link
                      </Button>
                      <Button success>Success</Button>
                      <Button danger>Danger</Button>
                      <Button warning>Warning</Button>
                      <DropdownButton title="Dropdown button">
                        <List stacked>
                          <ListItem>Item 1</ListItem>
                          <ListItem>Item 2</ListItem>
                        </List>
                      </DropdownButton>
                      <Margin bottom={4} />
                      <Button lg>J'accepte</Button>
                      <Button lg secondary>
                        Réinitialiser les filtres
                      </Button>
                      <Button lg light>
                        Annuler la recherche
                      </Button>
                      <Button lg background shadow>
                        Test
                      </Button>
                      <Button lg primary as="a" href="https://reactjs.org/">
                        I am a link
                      </Button>
                      <Margin bottom={4} />
                      <StackedButton lg left primary active small>
                        Left
                      </StackedButton>
                      <StackedButton lg middle primary small>
                        Middle
                      </StackedButton>
                      <StackedButton lg right primary small>
                        Right
                      </StackedButton>
                      <Margin bottom={4} />
                      <RoundButton secondary large>
                        <Icon size={22} icon={ic_play_arrow} />
                      </RoundButton>
                      <RoundButton secondary>
                        <Icon size={16} icon={ic_play_arrow} />
                      </RoundButton>
                      <RoundButton secondary small>
                        <Icon size={12} icon={ic_play_arrow} />
                      </RoundButton>
                      <RoundButton danger large>
                        <Icon size={22} icon={ic_whatshot} />
                      </RoundButton>
                      <RoundButton danger>
                        <Icon size={16} icon={ic_whatshot} />
                      </RoundButton>
                      <Tooltip placement="right" html={"Hot stuff"}>
                        <RoundButton danger small>
                          <Icon size={12} icon={ic_whatshot} />
                        </RoundButton>
                      </Tooltip>
                    </Box>

                    {/* Box */}
                    <Padding responsive>
                      <H2>Box</H2>
                      <Box>My zone</Box>
                      <Margin bottom={2} />
                      <Box light>My LightBox</Box>
                      <Margin bottom={2} />
                      <Box dark>My Darkzone</Box>
                      <Margin bottom={2} />
                      <UploadBox>Drop your files here</UploadBox>
                    </Padding>

                    {/* List */}
                    <Padding responsive>
                      <H2>List</H2>
                      <H4>Horizontal</H4>

                      <Box responsive>
                        <List width="100%">
                          <ListItem width="23%" selected>
                            <Text bold spaced uppercase>
                              List item 1
                            </Text>
                          </ListItem>
                          <ListItem width="23%">
                            <Text bold spaced uppercase>
                              Navigation 2
                            </Text>
                          </ListItem>
                          <ListItem width="23%">
                            <Text bold spaced uppercase>
                              Test 3
                            </Text>
                          </ListItem>
                          <ListItem width="23%">
                            <Text bold spaced uppercase>
                              Test 4
                            </Text>
                          </ListItem>
                        </List>
                      </Box>
                      <Margin bottom={5} />
                      <H4>Vertical</H4>
                      <Row>
                        <Col col>
                          <Box responsive>
                            <List stacked width="200px">
                              <ListItem selected>
                                <Text bold spaced uppercase>
                                  List item 1
                                </Text>
                              </ListItem>
                              <ListItem>
                                <Text bold spaced uppercase>
                                  Navigation 2
                                </Text>
                              </ListItem>
                              <ListItem>
                                <Text bold spaced uppercase>
                                  Test 3
                                </Text>
                              </ListItem>
                              <ListItem>
                                <Text bold spaced uppercase>
                                  Test 4
                                </Text>
                              </ListItem>
                            </List>
                          </Box>
                        </Col>
                        <Col col>
                          <Box responsive>
                            <List stacked width="90px">
                              <ListItem selected>Home</ListItem>
                              <ListItem>Play</ListItem>
                              <ListItem>Left</ListItem>
                              <ListItem>Right</ListItem>
                            </List>
                          </Box>
                        </Col>
                      </Row>
                    </Padding>

                    {/* Loader */}
                    <Padding responsive>
                      <H2>Loaders</H2>
                      <Row>
                        <Col col>
                          <Box responsive>
                            <Div>
                              <P lead>Primary</P>
                              <Loader />
                            </Div>
                            <Div>
                              <Padding left={4}>
                                <P lead>Dark</P>
                                <Loader dark />
                              </Padding>
                            </Div>
                            <Div>
                              <Padding left={4}>
                                <P lead>Small</P>
                                <Loader small />
                              </Padding>
                            </Div>
                            <Div>
                              <Padding left={4}>
                                <P lead>Small dark</P>
                                <Loader small dark />
                              </Padding>
                            </Div>
                          </Box>
                        </Col>
                      </Row>
                    </Padding>

                    {/* Card */}
                    <Padding responsive>
                      <H2>Cards</H2>

                      <Box responsive>
                        <MediaCard />
                        <MediaCard />
                        <MediaCard />
                        <MediaCard />
                      </Box>
                    </Padding>

                    {/* Form */}
                    <Padding responsive>
                      <H2>Forms</H2>
                      <H4>Large</H4>

                      <Box responsive>
                        <Row>
                          <Col col>
                            <Label block>Dark?</Label>
                            <Switch
                              name="switch-lg"
                              lg
                              checked={false}
                              onChange={(v) => console.log(v)}
                            />
                          </Col>
                          <Col col>
                            <Label block>Votre nom *</Label>
                            <Input lg block />
                          </Col>
                          <Col col>
                            <Label block>Votre prénom *</Label>
                            <Input lg block />
                          </Col>
                          <Col col>
                            <Label block>Date de naissance *</Label>
                            <DatePicker
                              monthStartDay={1}
                              locale="fr"
                              format="DD/MM/YYYY"
                              onChange={(d) =>
                                this.setState({
                                  currentDate:
                                    d === null ? null : d.format("YYYY-MM-DD"),
                                })
                              }
                              value={this.state.currentDate}
                              lg
                              block
                            />
                          </Col>
                          <Col col>
                            <Label block>Select</Label>
                            <Select
                              simpleValue
                              placeholder="This is the placeholder"
                              lg
                              isClearable={true}
                              value={this.state.selectedValue}
                              onChange={(value) =>
                                this.setState({ selectedValue: value })
                              }
                              options={[
                                "EEEEEEIHEOIAHOIEJOIJ EZAOIJEOIJEIOAJEIOJAEO IJZOIEJ POJIEZAJE",
                                "test 2",
                                "test 3",
                                "test 5",
                                "test 6",
                                "test 7",
                                "test 8",
                                "test 9",
                                "test 10",
                                "test 11",
                                "test 12",
                                "test 13",
                                "test 15",
                                "test 16",
                                "test 17",
                                "test 18",
                                "test 19",
                                "test 110",
                                "test 21",
                                "test 22",
                                "test 23",
                                "test 25",
                                "test 26",
                                "test 27",
                                "test 28",
                                "test 29",
                                "test 210",
                              ]}
                            />
                          </Col>
                        </Row>
                        <Divider big />
                        <Row>
                          <Col col={4}>
                            <Label block>Décrivez-vous</Label>
                            <Textarea lg block rows={6} />
                          </Col>
                          <Col col>
                            <Label block>Multi select</Label>
                            <VirtualizedSelect
                              simpleValue
                              isMulti
                              placeholder=""
                              lg
                              closeMenuOnSelect={false}
                              value={this.state.selectedMultiValues}
                              onChange={(values) =>
                                this.setState({ selectedMultiValues: values })
                              }
                              // styles={{
                              //   option: (provided, state) => ({
                              //     ...provided,
                              //     textOverflow: "ellipsis",
                              //     whiteSpace: "nowrap",
                              //     fontSize: ".75rem"
                              //   })
                              // }}
                              options={[
                                "EEEEEEIHEOIAHOIEJOIJ EZAOIJEOIJEIOAJEIOJAEO IJZOIEJ POJIEZAJE",
                                "test 1",
                                "test 2",
                                "test 3",
                                "test 5",
                                "test 6",
                                "test 7",
                                "test 8",
                                "test 9",
                                "test 10",
                              ]}
                            />
                          </Col>
                        </Row>
                      </Box>
                      <Margin bottom={4} />
                      <H4>Normal</H4>

                      <Box responsive>
                        <Row>
                          <Col col>
                            <Label block>Dark?</Label>
                            <Switch
                              name="switch"
                              checked={true}
                              onChange={(v) => console.log(v)}
                            />
                          </Col>
                          <Col col>
                            <Label block>Votre nom *</Label>
                            <Input block placeholder="Entrez votre nom..." />
                          </Col>
                          <Col col>
                            <Label block>Votre prénom *</Label>
                            <Input block />
                          </Col>
                          <Col col>
                            <Label block>Date de naissance *</Label>
                            <DatePicker
                              locale="fr"
                              format="YYYY-MM-DD"
                              onChange={(d) =>
                                this.setState({
                                  currentDate:
                                    d === null ? null : d.format("YYYY-MM-DD"),
                                })
                              }
                              value={this.state.currentDate}
                              block
                            />
                          </Col>
                          <Col col>
                            <Label block>Select</Label>
                            <Select
                              simpleValue
                              placeholder=""
                              isClearable={true}
                              value={this.state.selectedValue}
                              onChange={(value) =>
                                this.setState({ selectedValue: value })
                              }
                              options={["test 1", "test 2"]}
                            />
                          </Col>
                        </Row>
                        <Divider big />
                        <Row>
                          <Col col={4}>
                            <Label block>Décrivez-vous</Label>
                            <Textarea block rows={6} />
                          </Col>
                          <Col col>
                            <Label block>Multi select</Label>
                            <VirtualizedSelect
                              simpleValue
                              isMulti
                              placeholder=""
                              closeMenuOnSelect={false}
                              value={this.state.selectedMultiValues}
                              onChange={(values) =>
                                this.setState({ selectedMultiValues: values })
                              }
                              options={[
                                "test 1",
                                "test 2",
                                "test 3",
                                "test 5",
                                "test 6",
                                "test 7",
                                "test 8",
                                "test 9",
                                "test 10",
                                "test 11",
                                "test 12",
                                "test 13",
                                "test 15",
                                "test 16",
                                "test 17",
                                "test 18",
                                "test 19",
                                "test 110",
                                "test 21",
                                "test 22",
                                "test 23",
                                "test 25",
                                "test 26",
                                "test 27",
                                "test 28",
                                "test 29",
                                "test 210",
                              ]}
                            />
                          </Col>
                        </Row>
                      </Box>
                    </Padding>

                    {/* Alerts */}
                    <Padding responsive>
                      <H2>Alerts</H2>
                      <Padding bottom={4}>
                        <Alert primary>This is a primary alert!</Alert>
                        <Alert secondary>This is a secondary alert!</Alert>
                        <Alert success>This is a success alert!</Alert>
                        <Alert info>This is a info alert!</Alert>
                        <Alert warning>This is a warning alert!</Alert>
                        <Alert danger>This is a danger alert!</Alert>
                      </Padding>
                      <H4>Dismissible Alert</H4>
                      {this.state.showAlert && (
                        <Alert
                          danger
                          dismissible
                          onDismiss={() => this.setState({ showAlert: false })}
                        >
                          This is a danger dismissible alert!
                        </Alert>
                      )}
                    </Padding>

                    {/* Tags */}
                    <Padding responsive>
                      <H2>Tags</H2>
                      <Padding bottom={3}>
                        <Tag large upper primary>
                          Primary
                        </Tag>
                        <Tag large upper secondary>
                          Secondary
                        </Tag>
                        <Tag large upper success>
                          Success
                        </Tag>
                        <Tag large upper info>
                          Info
                        </Tag>
                        <Tag large upper warning>
                          Warning
                        </Tag>
                        <Tag large upper danger>
                          Danger
                        </Tag>
                        <Tag large upper light>
                          Light
                        </Tag>
                      </Padding>
                      <Padding bottom={3}>
                        <Tag medium upper primary>
                          Primary
                        </Tag>
                        <Tag medium upper secondary>
                          Secondary
                        </Tag>
                        <Tag medium upper success>
                          Success
                        </Tag>
                        <Tag medium upper info>
                          Info
                        </Tag>
                        <Tag medium upper warning>
                          Warning
                        </Tag>
                        <Tag medium upper danger>
                          Danger
                        </Tag>
                        <Tag medium upper light>
                          Light
                        </Tag>
                      </Padding>
                      <Padding bottom={4}>
                        <Tag upper primary>
                          Primary
                        </Tag>
                        <Tag upper secondary>
                          Secondary
                        </Tag>
                        <Tag upper success>
                          Success
                        </Tag>
                        <Tag upper info>
                          Info
                        </Tag>
                        <Tag upper warning>
                          Warning
                        </Tag>
                        <Tag upper danger>
                          Danger
                        </Tag>
                        <Tag upper light>
                          Light
                        </Tag>
                      </Padding>
                      <H4>Dismissible Tag</H4>
                      <Tag
                        large
                        upper
                        danger
                        dismissible
                        onDismiss={() => alert("Dismiss")}
                      >
                        Dismiss
                      </Tag>
                      <Tag
                        medium
                        upper
                        danger
                        dismissible
                        onDismiss={() => alert("Dismiss")}
                      >
                        Dismiss
                      </Tag>
                      <Tag
                        upper
                        danger
                        dismissible
                        onDismiss={() => alert("Dismiss")}
                      >
                        Dismiss
                      </Tag>
                    </Padding>

                    {/* Toasts */}
                    <Padding responsive>
                      <H2>Toasts</H2>
                      <Padding bottom={3}>
                        <Toast>Primary</Toast>
                        <Toast success>Produit mis à jour</Toast>
                        <Toast info>Info</Toast>
                        <Toast warning>Warning</Toast>
                        <Toast danger>Danger</Toast>
                      </Padding>
                    </Padding>

                    {/* Progress */}
                    <Padding responsive>
                      <H2>Progress</H2>
                      <Padding bottom={3}>
                        <Progress
                          total={100}
                          success={10}
                          danger={30}
                          pending={60}
                        />
                      </Padding>
                      <Padding bottom={3}>
                        <Progress
                          sm
                          total={100}
                          success={60}
                          danger={10}
                          pending={30}
                        />
                      </Padding>
                    </Padding>
                  </Padding>
                  {/* </Box> */}
                </Margin>

                {/* Layout */}
                <Margin bottom={4}>
                  <Box transparent noPadding>
                    <Row>
                      <Col col={4} xs={12}>
                        <Box dark height="20rem">
                          <H4>First column</H4>
                          <P lead>
                            This is my first paragrapher. It needs to be a bit
                            more than one line to check if it works.
                          </P>
                        </Box>
                      </Col>
                      <Col col={8} xs={12}>
                        <Row>
                          {/* Text */}
                          <Col noPaddingRight col={8} xs={12}>
                            <Box height="20rem">
                              <H4>Second column</H4>
                              <P>
                                This is a smaller paragraph. Just to see the
                                difference with left box. I just continue
                                writing again and again.
                              </P>
                              <Margin top={4} />
                              <Row>
                                <Col col right>
                                  <Button
                                    primary
                                    onClick={(e) =>
                                      this.setState({ modalOpened: true })
                                    }
                                  >
                                    Je m'abonne
                                  </Button>
                                </Col>
                              </Row>
                            </Box>
                          </Col>
                          {/* Img */}
                          <Col noPaddingLeft col={4}>
                            <BackgroundBox
                              height="100%"
                              noPadding
                              url="https://www.cinemaspathegaumont.com/media/magazine/10-2018/image/1975181.jpg"
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Box>
                </Margin>

                <Margin bottom={4}>
                  <Box>
                    <H4>Recevoir des news</H4>
                    <P lead>En vous abonnant, soyez sur de ne rien rater.</P>
                    <a
                      href="https://www.styled-components.com/docs/api#createglobalstyle"
                      target="blank"
                    >
                      https://www.styled-components.com/docs/api#createglobalstyle
                    </a>
                  </Box>
                </Margin>

                <Modal
                  show={this.state.modalOpened}
                  md
                  transition
                  onClose={() => this.setState({ modalOpened: false })}
                >
                  <h2>Abonnez-vous !</h2>
                  <P lead>
                    Participez au grand jeu concours et gagnez jusqu'à un an
                    d'abonnement !
                  </P>

                  <Select
                    simpleValue
                    placeholder="This is the placeholder"
                    lg
                    isClearable={true}
                    value={this.state.selectedValue}
                    onChange={(value) =>
                      this.setState({ selectedValue: value })
                    }
                    options={[
                      "test 19",
                      "test 110",
                      "test 21",
                      "test 22",
                      "test 23",
                      "test 25",
                      "test 26",
                      "test 27",
                      "test 28",
                      "test 29",
                      "test 210",
                    ]}
                  />
                  <Margin bottom={5} />
                  <Row>
                    <Col col right>
                      <Button
                        light
                        noShadow
                        onClick={(e) => this.setState({ modalOpened: false })}
                      >
                        Annuler
                      </Button>
                      <Button
                        primary
                        onClick={(e) => this.setState({ modalOpened: false })}
                      >
                        J'accepte
                      </Button>
                    </Col>
                  </Row>
                </Modal>
              </Padding>

              {/* Stats */}
              <Padding responsive>
                <H2>Stats</H2>
                <Box noPadding noShadow noBorderRadius center>
                  <Gauge percentage={80} size={"xs"} />
                  <Gauge percentage={70} size={"sm"} bgColor="#fff" />
                  <Gauge
                    percentage={60}
                    size={"md"}
                    color={`rgb(${this.state.theme.color.primary})`}
                  />
                  <Gauge percentage={85} size={"lg"} startDegree={180} />
                  <Gauge
                    percentage={75}
                    size={"120"}
                    stroke={14}
                    color={`rgb(${this.state.theme.color.green})`}
                  >
                    <div>40/60</div>
                  </Gauge>
                </Box>
              </Padding>

              {/* Footer */}
              <Margin top={6}>
                <Box dark>
                  <Padding responsive>Footer</Padding>
                </Box>
              </Margin>
            </Box>
          </React.Fragment>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
