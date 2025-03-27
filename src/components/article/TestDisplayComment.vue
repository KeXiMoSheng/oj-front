<template>
  <div style="width: 80%">
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
      <div v-if="singleComment.showComments" v-for="(reply, replyIndex) in singleComment.replies" :key="replyIndex" class="reply-comment">
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
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DisplayComment from "@/components/article/DisplayComment.vue";
import DisplayCommentSimple from "@/components/article/DisplayCommentSimple.vue";

const comments = ref([
  {
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
};

const handleComment = (comment) => {
  console.log("评论");
  comment.showComments = !comment.showComments;
};

const handleReply = () => {
  console.log("回复");
};
</script>

<style scoped>
.reply-comment {
  padding: 10px;
  margin-left: 70px;
}
</style>