<template>
  <div class="article-container">
    <!-- 第一个 div -->
    <div class="article-wrapper">
      <div>
        <ArticleHeader
            :title="article.title"
            :avatarUrl="article.userVO?.userAvatar"
            :authorName="article.userVO?.userName"
            :publishTime="article.publishTime"
            :tags="article.tagList"
        />
      </div>
      <!-- 第二个 div -->
      <div class="article-content">
        <MdPreview :modelValue="article.content"/>
      </div>
      <!-- 第三个 div -->
      <div class="article-status">
        <InteractionInfo
            :is-favoured="isFavoured"
            :is-liked="isLiked"
            :thumb-num="article.thumbNum"
            :read-num="article.readNum"
            :favour-num="article.favourNum"
            :comment-count="article.commentNum"
            @like="handleLike"
            @favour="handleFavour"
            @comment="handleComment"
        />
      </div>
      <!-- 第四个 div评论模块 -->
      <div class="article-comments">
        <div class="comment-input">
          <CommentComponent
              @comment="handleComment"
              :comment="CommentMessage"
              ref="commentRef"
          />
        </div>
      </div>
      <div class="comment-list">
        <div v-for="(singleComment, index) in articleCommentList" :key="index">
          <DisplayComment
              :username="singleComment.userVO.userName"
              :commentContent="singleComment.content"
              :avatar-url="singleComment.userVO.userAvatar"
              :comment-count="singleComment.children.length"
              :is-liked="true"
              :like-count="singleComment.thumbNum"
              :publish-time="singleComment.createdTime"
              @like="handleLike"
              @comment="handleCommentDisplay(singleComment)"
              @reply="handleReply"
          />
          <div v-if="showComments" v-for="(reply, replyIndex) in singleComment.children"
               :key="replyIndex" class="reply-comment">
            <DisplayCommentSimple
                :username="reply.userVO.userName"
                :commentContent="reply.content"
                :avatar-url="singleComment.userVO.userAvatar"
                :is-liked="true"
                :like-count="reply.thumbNum"
                :publish-time="singleComment.createdTime"
                @like="handleLike"
                @reply="handleReply"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref} from 'vue';
import ArticleHeader from "@/components/article/ArticleHeader.vue";
import InteractionInfo from "@/components/InteractionInfo.vue";
import {MdPreview} from 'md-editor-v3';
import CommentComponent from "@/components/article/CommentComponent.vue";
import DisplayComment from "@/components/article/DisplayComment.vue";
import DisplayCommentSimple from "@/components/article/DisplayCommentSimple.vue";
import {useRoute} from "vue-router";
import {getArticle} from "@/api/article";
import type {Article} from "@/api/article/type.ts";
import {articleThumbAdd, articleThumbDelete, articleThumbGet} from "@/api/aritcleThumb";
import type {ArticleThumbAddRequest} from "@/api/aritcleThumb/type.ts";
import {useUserStore} from "@/stores/userStore.ts";
import {articleFavourDelete, articleFavourGet, articleFavourAdd} from "@/api/articleFavour";
import {addArticleComment, deleteArticleComment, getArticleCommentList} from "@/api/articleComment";
import type {ArticleComment, ArticleCommentAddRequest} from "@/api/articleComment/type.ts";

const route = useRoute();
const userUserStore = useUserStore()
const articleId = Number(route.params.id);
const article = ref<Article>({
  authorId: 0,
  commentNum: 0,
  content: "",
  favourNum: 0,
  readNum: 0,
  thumbNum: 0,
  title: ""
});
// 定义 ref 来引用子组件
// 定义 CommentComponent 的类型
type CommentComponentType = InstanceType<typeof CommentComponent>;

// 使用 ref 并指定类型
const commentRef = ref<CommentComponentType | null>(null);
const CommentMessage = ref('');
const isLiked = ref(false);
const isFavoured = ref(false);

const getComment = () => {
  return commentRef.value.getCommentContent();
};
const handleFavour = async () => {
  // 处理收藏逻辑
  if (isFavoured.value == true) {
    await toArticleFavourDelete();
  } else {
    await toArticleFavourAdd();
  }
  isFavoured.value = !isFavoured.value;
  console.log("收藏点击" + isFavoured.value);
}

const articleThumbAddRequest = reactive<ArticleThumbAddRequest>({
  articleId: articleId,
  userId: Number(userUserStore.user?.id),
})
const articleFavourAddRequest = reactive<ArticleThumbAddRequest>({
  articleId: articleId,
  userId: Number(userUserStore.user?.id),
})
const handleLike = async () => {
  // 处理点赞逻辑
  if (isLiked.value == true) {
    await toArticleThumbDelete();
  } else {
    await toArticleThumbAdd();
  }
  isLiked.value = !isLiked.value;
};
const toArticleThumbGet = async () => {
  console.log("获取点赞");
  console.log(articleThumbAddRequest);
  const res = await articleThumbGet(articleThumbAddRequest);
  if (res.data == null) {
    return;
  }
  if (res.data.articleId == articleId && res.data.userId == userUserStore.user.id) {
    isLiked.value = true;
  }
}
const toArticleThumbDelete = async () => {
  const res = await articleThumbDelete(articleThumbAddRequest)
  article.value.thumbNum--;
  // console.log(res)
  // console.log("取消点赞");
}
const toArticleThumbAdd = async () => {
  // console.log("点赞");
  // console.log(articleAddRequest);
  const res = await articleThumbAdd(articleThumbAddRequest);
  if (res.data == true) {
    article.value.thumbNum++;
  }
  // console.log(res);
}
// 收藏
const toArticleFavourAdd = async () => {
  const res = await articleFavourAdd(articleFavourAddRequest);
  article.value.favourNum++;
  // console.log(res);
}

// 取消收藏
const toArticleFavourDelete = async () => {
  const res = await articleFavourDelete(articleFavourAddRequest);
  article.value.favourNum--;
  // console.log(res);
}
// 查看收藏状态
const toArticleFavourGet = async () => {
  const res = await articleFavourGet(articleFavourAddRequest);
  // console.log(res);
  if (res.data == null) {
    return;
  }
  if (res.data.articleId == articleId && res.data.userId == userUserStore.user.id) {
    isFavoured.value = true;
  }
}
const handleComment = () => {
  // 获取评论内容的方法
  let message = getComment();
  console.log('当前评论内容:', message);
};

const handleReply = () => {
  console.log("回复");
};
const toGetArticle = async () => {
  const res = await getArticle(articleId);
  article.value = res.data;
  // console.log(res.data);
  if (res.message === "ok") {
    Object.assign(article, res.data);
  }
}
const articleCommentList = reactive<ArticleComment[]>([{
  articleId: 0,
  children: [],
  content: "",
  parentId: 0,
  thumbNum: 0,
  createdTime: "",
  userId: 0,
  userVO: {},
  showChildren: false
}])
const showComments = ref(false);
// 获取评论内容
const toGetArticleCommentList = async () => {
  let res = await getArticleCommentList(articleId);
  if (res.message === "ok") {
    console.log(res.data);
    Object.assign(articleCommentList, res.data);
  }
}
const articleCommentAddRequest = reactive<ArticleCommentAddRequest>({
  articleId: 0,
  content: "",
  parentId: 0,
  userId: 0
})
const handleCommentDisplay = (singleComment: ArticleComment) => {
  console.log("展开收起评论");
  console.log(singleComment.showChildren);
  singleComment.showChildren = !singleComment.showChildren;
}
const toDeleteArticleComment = async () => {
  let res = await deleteArticleComment(articleCommentAddRequest);
}
const toAddArticleComment = async () => {
  let res = await addArticleComment(articleCommentAddRequest);
}

onMounted(async () => {
  console.log("article id is " + articleId);
  console.log("userId is" + userUserStore.user?.id);
  await toGetArticle();
  await toArticleThumbGet();
  await toArticleFavourGet()
  await toGetArticleCommentList();
})
</script>

<style scoped>
.article-container {
  display: flex;
  /*
  align-items: center;
  */
  justify-content: center;
  width: 100%;
  padding: 10px;
  height: 100vh;
}

.article-wrapper {
  width: 1200px;

}

.author-avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.article-tags span {
  margin-right: 5px;
}

.article-status {
  display: flex;
  padding: 15px;
  margin: 10px;
}

.status-item {
  display: flex;
  align-items: center;
}

.comment-input {
  margin-bottom: 10px;
}

.comment-input textarea {
  width: 100%;
  height: 80px;
  margin-bottom: 5px;
}


.article-content {
  margin: 10px;
  padding: 16px;
}

.comment-list {
  margin-left: 20px;
}
</style>
