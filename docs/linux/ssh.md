---
id: ssh
title: 秘钥登录服务器
sidebar_label: 秘钥登录服务器
---

### 客户端：生成秘钥文件

1. 首先在本地机器生成秘钥对，目前更推荐是 4096，追求更高安全性推荐 ECC，文件名称自定义,我这里以 **~/.ssh/id_rsa-remote-ssh** 为例

```bash
ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa-remote-ssh
```

### 客户端：拷贝秘钥文件内容到服务器

2. 将.pub 文件的内容复制到 **~/.ssh/authorized_keys** 中执行 **ssh-copy-id** 命令即可，把 ssh 的 pub 内容直接复制到服务器的 [用户名]的 authorized_keys 中

```bash
ssh-copy-id -i ~/.ssh/id_rsa-remote-ssh  -p 端口 用户名@服务器ip
```

### 客户端：使用 SSH 的用户配置文件，简化 SSH 管理

3. 变更 **~/.ssh/config** 文件的内容，利用 SSH 的用户配置文件，简化管理 SSH 会话

   > 用户配置文件 (~/.ssh/config)，系统配置文件 (/etc/ssh/ssh_config)

   | 配置         | 含义             |
   | ------------ | ---------------- |
   | Host         | 别名             |
   | HostName     | 主机名           |
   | User         | 用户名           |
   | Port         | 登录端口         |
   | IdentityFile | 秘钥文件存放地址 |

```bash
cat ~/.ssh/config
```

- 加入以下内容

```bash
Host 192.168.1.3
    HostName 192.168.1.1
    User root
    Port 22
    IdentityFile ~/.ssh/id_rsa-remote-ssh
```

### 服务器端：登录服务器变更文件权限

4. 改变服务器中 authorized_keys 文件以及.ssh 目录的权限

```bash
chmod 600 ~/.ssh/authorized_keys
chmod 700 -R ~/.ssh
```

### 客户端：使用 SSH 快捷登录服务器

```bash
# 最后 ssh 登录服务器即可，再也不用输入密码和用户名了
ssh 192.168.1.3

# 验证完毕可以考虑禁止用户名登录，保证安全
```

### centos 快捷安装nodejs

```bash
curl --silent --location https://rpm.nodesource.com/setup_12.x | bash -
yum install -y nodejs
```
