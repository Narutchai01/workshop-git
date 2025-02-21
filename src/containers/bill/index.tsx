import { dataProducts } from '@containers/bill/constants'
import { Product } from '@containers/bill/interface'
import {
  StyledEmptyBox,
  StyledHeader,
  StyledLayout,
  StyledSubHeader,
  StyledSubHeaderDetail,
  StyledWrapper,
  TitleNoMargin
} from '@containers/bill/style'
import { Col, Row, Table } from 'antd'
import Input from 'antd/lib/input/Input'
import { ColumnsType } from 'antd/lib/table'
import { ReactElement } from 'react'

const BillContainer = (): ReactElement => {
  const columns: ColumnsType<Product> = [
    {
      title: 'จำนวน',
      dataIndex: 'quantity',
      key: 'id'
    },
    {
      title: 'รายการ',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'หน่วยละ',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: 'จำนวนเงิน',
      dataIndex: 'price'
    }
  ]

  return (
    <StyledLayout>
      <StyledWrapper>
        {/* Header */}
        <StyledHeader>
          <Row gutter={[8, 8]}>
            <Col span={7}>
              <TitleNoMargin level={5}>เล่มที่</TitleNoMargin>
              <TitleNoMargin level={5}>Book no. ___________</TitleNoMargin>
            </Col>
            <StyledEmptyBox flex={1} />
            <Col span={7}>
              <TitleNoMargin level={5}>เลขที่</TitleNoMargin>
              <TitleNoMargin level={5}>Bill no. ___________</TitleNoMargin>
            </Col>
          </Row>
        </StyledHeader>
        <StyledSubHeader>
          <TitleNoMargin level={4}>บิลเงินสด</TitleNoMargin>
        </StyledSubHeader>
        <StyledSubHeaderDetail>
          <Row>
            <Col span={16}>
              <TitleNoMargin level={5}>นาม</TitleNoMargin>

              <TitleNoMargin level={5}>
                <Input placeholder={'Name____________________________'} />
              </TitleNoMargin>
            </Col>
            <Col span={8}>
              <TitleNoMargin level={5}>วันที่</TitleNoMargin>
              <TitleNoMargin level={5}>
                <Input placeholder={'Date____________________________'} />
              </TitleNoMargin>
            </Col>
            <Col span={16}>
              <TitleNoMargin level={5}>ที่อยู่</TitleNoMargin>
              <TitleNoMargin level={5}>
                <Input placeholder={'Address____________________________'} />
              </TitleNoMargin>
            </Col>
            <Col span={8}>
              <TitleNoMargin level={5}>เลขผู้เสียภาษี</TitleNoMargin>
              <TitleNoMargin level={5}>
                <Input placeholder={'Tax ID____________________________'} />
              </TitleNoMargin>
            </Col>
          </Row>
        </StyledSubHeaderDetail>
        {/* Content */}
        <Table
          columns={columns}
          dataSource={dataProducts}
          pagination={false}
          summary={(data) => {
            const total: number = data.reduce((acc, cur) => acc + cur.price, 0)
            return (
              <Table.Summary>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0} colSpan={3} align={'right'}>
                    จำนวนเงิน
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={1} align={'center'}>
                    {total}
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            )
          }}
        />
      </StyledWrapper>
    </StyledLayout>
  )
}
export default BillContainer
