---
title: "（更新中）git基础使用方法"
published: 2026-05-16
updated: 2026-05-16
description: "安装、配置git，并使用git进行版本控制的基础操作。"
tags: ["GitHub", "工具推荐"]
category: 开发工具
draft: false
pinned: false
comment: true
author: "Luquiescene"
---

# 前言

版本控制在 AI coding 的时代具有十分重要的作用。而git作为一款轻量、高效且开源的版本控制工具，比较容易上手，在项目比较复杂、需要多人协作的情况下有很大帮助。

博主初学git，顺便记录一下学习笔记，提取重要知识，希望可以帮到大家。

演示操作系统：Windows 11，其他系统可能有所不同，请另寻教程。

# 安装与配置

## 安装

由于git是开源项目，可以直接前往官网下载安装，完全免费。网址如下。[点击前往](https://git-scm.cn/install/)

  https://git-scm.cn/install/

## 首次使用前配置

打开 git bash 或 cmd 终端，输入以下内容：

```shell
$ git config --global user.name "用户名"
$ git config --global user.email 用户邮箱
```

- `user.name`：用户名。提交更改时，将包含在commit元数据中，表明提交者。
- `user.email`：用户邮箱。提交更改时，将包含在commit元数据中，表明提交者的邮箱。

::::important
此处与GitHub无关。无论是否上传GitHub，用户名、用户邮箱存储在commit元数据中。
::::

完成后，可输入以下指令，查看是否配置完成。

```shell
git config --list
```










