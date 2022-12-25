<template>
  <Row>
    <Col class="body">
      <Button color="primary">Primary</Button>
      <Button variant="text" color="primary">Primary</Button>
      <Badge :count="6" status="danger" class="badge-item">
        <Button variant="solid" color="primary">Primary</Button>
      </Badge>
      <Icon name="like"></Icon>
    </Col>
  </Row>
</template>

<script setup lang="ts">
import { Button, Row, Col, Badge, Icon } from "vue-devui";
</script>

<style lang="scss" scoped>
.body {
  padding: 15px;
}
</style>
