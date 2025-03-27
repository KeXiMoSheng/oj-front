<template>
  <div class="article-container">
    <!-- 第一个 div -->
    <div class="article-wrapper">
      <div>
        <ArticleHeader
            :title="article.title"
            :avatarUrl="article.avatarUrl"
            :authorName="article.authorName"
            :publishTime="article.publishTime"
            :tags="article.tags"
        />
      </div>
      <!-- 第二个 div -->
      <div class="article-content">
        <MdPreview :modelValue="article.articleContent"/>
      </div>
      <!-- 第三个 div -->
      <div class="article-status">
        <InteractionInfo
            :is-favoured="isFavorited"
            :is-liked="isLiked"
            :like-count="100"
            :view-count="50"
            :favoured-count="30"
            :comment-count="55"
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
      <div class="comment-list" >
        <div v-for="(singleComment, index) in comments" :key="index">
          <DisplayComment
              :username="singleComment.userName"
              :commentContent="singleComment.commentContent"
              :avatar-url="singleComment.userAvatar"
              :comment-count="singleComment.commentCount"
              :is-liked="true"
              :like-count="80"
              :publish-time="singleComment.publishTime"
              @like="handleLike"
              @comment="handleComment(singleComment)"
              @reply="handleReply"
          />
          <div v-if="singleComment.showComments" v-for="(reply, replyIndex) in singleComment.replies"
               :key="replyIndex" class="reply-comment">
            <DisplayCommentSimple
                :username="singleComment.userName"
                :commentContent="reply"
                :avatar-url="singleComment.userAvatar"
                :comment-count="singleComment.commentCount"
                :is-liked="true"
                :like-count="80"
                :publish-time="singleComment.publishTime"
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
import {ref} from 'vue';
import ArticleHeader from "@/components/article/ArticleHeader.vue";
import InteractionInfo from "@/components/InteractionInfo.vue";
import {MdPreview} from 'md-editor-v3';
import CommentComponent from "@/components/article/CommentComponent.vue";
import DisplayComment from "@/components/article/DisplayComment.vue";
import DisplayCommentSimple from "@/components/article/DisplayCommentSimple.vue";

const article = ref({
  title: '示例文章标题',
  avatarUrl: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.aCW_Ax9FtUGhnDBetciYoQAAAA?w=224&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7',
  authorName: '示例作者',
  publishTime: '2025-03-25 12:00:00',
  tags: ['标签1', '标签2'],
  articleContent: '这是一篇示例文章的内容。',
  viewCount: 100,
  likeCount: 20,
  commentCount: 10,
  favoriteCount: 15,
  comments: ['这是一条示例评论', '另一条示例评论']
});
// 定义 ref 来引用子组件
// 定义 CommentComponent 的类型
type CommentComponentType = InstanceType<typeof CommentComponent>;

// 使用 ref 并指定类型
const commentRef = ref<CommentComponentType | null>(null);
const CommentMessage = ref('');
const isLiked = ref(false);
const isFavorited = ref(false);

const getComment = () => {
  return commentRef.value.getCommentContent();
};
const handleFavour = () => {
  // 处理收藏逻辑
  isFavorited.value = !isFavorited.value;
  console.log("收藏点击" + isFavorited.value);
}

const comments = ref([{
  userAvatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.aCW_Ax9FtUGhnDBetciYoQAAAA?w=224&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7',
  userName: '张三',
  commentContent: '这个产品真的很不错，使用起来很方便！',
  commentCount: 5,
  publishTime: '2025-3-25 16:23',
  replies: ['是的', '你说的没错'],
  showComments: false
},
  {
    userAvatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.aCW_Ax9FtUGhnDBetciYoQAAAA?w=224&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    userName: '李四',
    commentContent: '我也觉得很好用！',
    commentCount: 3,
    publishTime: '2025-3-25 16:25',
    replies: ['确实', '赞同'],
    showComments: false
  }
]);

const handleLike = () => {
  console.log("点赞");
  // 处理点赞逻辑
  isLiked.value = !isLiked.value;
  console.log("点赞点击" + isLiked.value);
};

const handleComment = (comment) => {
  console.log("评论");
  comment.showComments = !comment.showComments;
  // 获取评论内容的方法
  let message = getComment();
  console.log('当前评论内容:', message);
};

const handleReply = () => {
  console.log("回复");
};
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

.comment-item {
  border: 1px solid #eee;
  padding: 5px;
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
