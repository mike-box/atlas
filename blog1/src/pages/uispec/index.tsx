import React from "react"
// import styled from 'styled-components'
// import { THEME } from '../../config'
import { WebPageHead, VerticalMenu } from '../../components'
import GlobalStyle from "../../global.styled"
import { PageContainer, MenuArea, ContentArea, MENU_ITEMS } from '../modules/uispec'

const Typography = () => (
  <div className="flex-start">
    <div>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>
    </div>
    <div style={{margin: '1em 0 0 1em', lineHeight: '2em'}}>
      <p className="">p</p>
      <p className="ft-regular">regular</p>
      <p className="ft-medium">medium</p>
      <p className="ft-bold">bold</p>
      <p className="ft-09">09</p>
      <p className="ft-08">08</p>
      <p className="ft-07">07</p>
      <p className="ft-06">06</p>
    </div>
    <div style={{margin: '1em 0 0 1em', lineHeight: '1.6em'}}>
      <p className="">Build scalable high performance apps using our MongoDB cloud service. We’ll handle the provisioning, scaling, updates, back ups, and security of your MongoDB clusters, so you can focus on your apps.</p>
    </div>
    <div style={{margin: '1em 0 0 1em', }}>
      <p>马有垂缰之意，犬有湿草之恩；羊羔跪乳报母恩，猿偷献果自奔；蛛织罗网护体，鼠盗余粮防身；梅鹿见食等成群，不义之人可恨。</p>
      <p>马有垂缰之意`，出自《异苑》。说的是前秦世祖皇帝苻坚在与容冲的一次交仗中，不幸战败，落荒而逃，不料一失足掉在了山洞里，爬又爬不上来。在这个千钧一发之际，他的坐骑突跪在涧边，将缰绳垂了下来，苻坚抓住缰绳爬上来，才脱了大难。</p>
      <p>犬有湿草之恩`，出自晋人干宝《搜神记》，讲的是三国时期吴国人李信纯的事。这李信纯有一只狗，取名黑龙，颇通人性。有一天，李信纯外出会朋友，不想喝得酩酊大醉，回家路上摔倒在一片草地上便睡了过去。恰在这时，一批猎人放火围猎，眼看大火就要烧到李信纯身边，可他浑然不知。那狗想拉他，却拉不动。于是便跳到附近的水沟里把全身弄湿，然后跑回来，用身上的水将李信纯身边的草打湿，往返多次，才使得李信纯幸免一死。</p>
    </div>
  </div>
)

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <WebPageHead context={{ title: '界面设计规格' }} />

      <PageContainer className="flex-between debugx">

        <MenuArea className="debugx">
          <VerticalMenu items={MENU_ITEMS} />
        </MenuArea>

        <ContentArea>
          <Typography />
        </ContentArea>
        
      </PageContainer>
    </>
  )
}
