import React from 'react'
import { Table } from 'semantic-ui-react'

const TableExample = () => (
  <Table inverted>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Cue</Table.HeaderCell>
        <Table.HeaderCell>Craving</Table.HeaderCell>
        <Table.HeaderCell>Response</Table.HeaderCell>
        <Table.HeaderCell>Reward</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>C1-R1</Table.Cell>
        <Table.Cell>C2-R1</Table.Cell>
        <Table.Cell>C3-R1</Table.Cell>
        <Table.Cell>C4-R1</Table.Cell>
        </Table.Row>
      <Table.Row>
        <Table.Cell>C1-R2</Table.Cell>
        <Table.Cell>C2-R2</Table.Cell>
        <Table.Cell>C3-R2</Table.Cell>
        <Table.Cell>C4-R2</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>C1-R3</Table.Cell>
        <Table.Cell>C2-R3</Table.Cell>
        <Table.Cell>C3-R3</Table.Cell>
        <Table.Cell>C4-R3</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell>C1-R4</Table.HeaderCell>
        <Table.HeaderCell>C2-R4</Table.HeaderCell>
        <Table.HeaderCell>C3-R4</Table.HeaderCell>
        <Table.HeaderCell>C4-R4</Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)

export default TableExample