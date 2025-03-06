<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryRef" :inline="true" v-show="showSearch" label-width="100px">
      <el-form-item label="案号" prop="idStr">
        <el-input
          v-model="queryParams.idStr"
          placeholder="请输入案号"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="原告" prop="plaintiff">
        <el-input
          v-model="queryParams.plaintiff"
          placeholder="请输入原告"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="被告" prop="defendant">
        <el-input
          v-model="queryParams.defendant"
          placeholder="请输入被告"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="法院" prop="court">
        <el-input
          v-model="queryParams.court"
          placeholder="请输入法院"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="开庭律师" prop="courtLawyer">
        <el-input
          v-model="queryParams.courtLawyer"
          placeholder="请输入开庭律师"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="开庭负责人" prop="courtPerson">
        <el-input
          v-model="queryParams.courtPerson"
          placeholder="请输入开庭负责人"
          clearable
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="开庭时间" prop="courtdateTime">
        <el-date-picker clearable
          v-model="queryParams.courtdateTime"
          type="date"
          value-format="YYYY-MM-DD"
          placeholder="请选择开庭时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
        <el-button icon="Refresh" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="Plus"
          @click="handleAdd"
          v-hasPermi="['court:court:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="Edit"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['court:court:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="Delete"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['court:court:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="Download"
          @click="handleExport"
          v-hasPermi="['court:court:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="courtList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="案号" align="center" prop="idStr" />
      <el-table-column label="原告" align="center" prop="plaintiff" />
      <el-table-column label="被告" align="center" prop="defendant" />
      <el-table-column label="法院" align="center" prop="court" />
      <el-table-column label="开庭律师" align="center" prop="courtLawyer" />
      <el-table-column label="开庭负责人" align="center" prop="courtPerson" />
      <el-table-column label="开庭时间" align="center" prop="courtdateTime" width="180">
        <template #default="scope">
          <span>{{ parseTime(scope.row.courtdateTime, '{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template #default="scope">
          <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)" v-hasPermi="['court:court:edit']">修改</el-button>
          <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)" v-hasPermi="['court:court:remove']">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
    <pagination
      v-show="total>0"
      :total="total"
      v-model:page="queryParams.pageNum"
      v-model:limit="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改开庭管理对话框 -->
    <el-dialog :title="title" v-model="open" width="500px" append-to-body>
      <el-form ref="courtRef" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="案号" prop="idStr">
          <el-input v-model="form.idStr" placeholder="请输入案号" />
        </el-form-item>
        <el-form-item label="原告" prop="plaintiff">
          <el-input v-model="form.plaintiff" placeholder="请输入原告" />
        </el-form-item>
        <el-form-item label="被告" prop="defendant">
          <el-input v-model="form.defendant" placeholder="请输入被告" />
        </el-form-item>
        <el-form-item label="法院" prop="court">
          <el-input v-model="form.court" placeholder="请输入法院" />
        </el-form-item>
        <el-form-item label="开庭律师" prop="courtLawyer">
          <el-input v-model="form.courtLawyer" placeholder="请输入开庭律师" />
        </el-form-item>
        <el-form-item label="开庭负责人" prop="courtPerson">
          <el-input v-model="form.courtPerson" placeholder="请输入开庭负责人" />
        </el-form-item>
        <el-form-item label="开庭时间" prop="courtdateTime">
          <el-date-picker clearable
            v-model="form.courtdateTime"
            type="datetime"
            value-format="YYYY-MM-DD HH:mm:ss"
            placeholder="请选择开庭时间">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="submitForm">确 定</el-button>
          <el-button @click="cancel">取 消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup name="Court">
import { listCourt, getCourt, delCourt, addCourt, updateCourt } from "@/api/court/court";

const { proxy } = getCurrentInstance();

const courtList = ref([]);
const open = ref(false);
const loading = ref(true);
const showSearch = ref(true);
const ids = ref([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);
const title = ref("");

const data = reactive({
  form: {},
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    idStr: null,
    plaintiff: null,
    defendant: null,
    court: null,
    courtLawyer: null,
    courtPerson: null,
    courtdateTime: null
  },
  rules: {
  }
});

const { queryParams, form, rules } = toRefs(data);

/** 查询开庭管理列表 */
function getList() {
  loading.value = true;
  listCourt(queryParams.value).then(response => {
    courtList.value = response.rows;
    total.value = response.total;
    loading.value = false;
  });
}

// 取消按钮
function cancel() {
  open.value = false;
  reset();
}

// 表单重置
function reset() {
  form.value = {
    id: null,
    idStr: null,
    plaintiff: null,
    defendant: null,
    court: null,
    courtLawyer: null,
    courtPerson: null,
    createTime: null,
    updateTime: null,
    courtdateTime: null
  };
  proxy.resetForm("courtRef");
}

/** 搜索按钮操作 */
function handleQuery() {
  queryParams.value.pageNum = 1;
  getList();
}

/** 重置按钮操作 */
function resetQuery() {
  proxy.resetForm("queryRef");
  handleQuery();
}

// 多选框选中数据
function handleSelectionChange(selection) {
  ids.value = selection.map(item => item.id);
  single.value = selection.length != 1;
  multiple.value = !selection.length;
}

/** 新增按钮操作 */
function handleAdd() {
  reset();
  open.value = true;
  title.value = "添加开庭管理";
}

/** 修改按钮操作 */
function handleUpdate(row) {
  reset();
  const _id = row.id || ids.value
  getCourt(_id).then(response => {
    form.value = response.data;
    open.value = true;
    title.value = "修改开庭管理";
  });
}

/** 提交按钮 */
function submitForm() {
  proxy.$refs["courtRef"].validate(valid => {
    if (valid) {
      if (form.value.id != null) {
        updateCourt(form.value).then(response => {
          proxy.$modal.msgSuccess("修改成功");
          open.value = false;
          getList();
        });
      } else {
        addCourt(form.value).then(response => {
          proxy.$modal.msgSuccess("新增成功");
          open.value = false;
          getList();
        });
      }
    }
  });
}

/** 删除按钮操作 */
function handleDelete(row) {
  const _ids = row.id || ids.value;
  proxy.$modal.confirm('是否确认删除开庭管理编号为"' + _ids + '"的数据项？').then(function() {
    return delCourt(_ids);
  }).then(() => {
    getList();
    proxy.$modal.msgSuccess("删除成功");
  }).catch(() => {});
}

/** 导出按钮操作 */
function handleExport() {
  proxy.download('court/court/export', {
    ...queryParams.value
  }, `court_${new Date().getTime()}.xlsx`)
}

getList();
</script>
