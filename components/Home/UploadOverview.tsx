import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { FaRegFrown, FaRegSmileBeam, FaSpinner, FaTimes } from "react-icons/fa"
import styles from "../../styles/Home.module.scss"
import IconByExtension from "./IconByExtension"

function UploadOverview(props: {
    shown: boolean
    setShown: (x: boolean) => void
    locked: boolean
    files: File[]
    removeFile: (i: number) => void
    title: string
    setTitle: (x: string) => void
    isTitleValidCallback: (x: string) => boolean
}) {
    const removeFile = (i: number) => {
        props.removeFile(i)
        if (props.files.length < 1) props.setShown(false)
    }

    const [renaming, setRenaming] = useState(false)

    return (
        <>
            <motion.div
                animate={{
                    transform: props.shown ? "scaleY(1)" : "scaleY(0)",
                    opacity: props.shown ? 1 : 0,
                }}
                className={styles.fullscreenOverview}
            >
                <div className={styles.contentbox}>
                    <div className={styles.close} onClick={() => props.setShown(false)}>
                        <FaTimes />
                    </div>
                    <h1 className="title primary">Overview</h1>

                    <div className={styles.settings}>
                        <div className={styles.inline}>
                            <h3 className="title">General settings</h3>
                            <span className={styles.status}>
                                {renaming ? (
                                    <div className="spinner">
                                        <FaSpinner />
                                    </div>
                                ) : props.isTitleValidCallback(props.title) ? (
                                    <FaRegSmileBeam className={styles.check} />
                                ) : (
                                    <>
                                        Title is invalid
                                        <FaRegFrown className={styles.times} />
                                    </>
                                )}
                            </span>
                        </div>
                        <div className={styles.inputfields}>
                            <div className={styles.inputSetting}>
                                <label>Name your upload</label>
                                <input
                                    onChange={(e) => {
                                        setRenaming(true)
                                        setTimeout(() => {
                                            props.setTitle(e.target.value)
                                            setRenaming(false)
                                        }, 100)
                                    }}
                                    disabled={props.locked}
                                    type="text"
                                    placeholder="Meeting at 29. March"
                                />
                            </div>
                            <div className={styles.inputSetting}>
                                <div className={styles.inline}>
                                    <label>Protect your files with encryption</label>
                                </div>
                                <input
                                    disabled={props.locked}
                                    type="password"
                                    placeholder="my-awesome-password"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.s}>
                        <h3 className="title">Files</h3>
                        <div className={styles.filesAdvanced}>
                            {props.files?.map((file, index) => {
                                if (!file) return
                                return (
                                    <div
                                        key={index}
                                        className={[styles.file, props.locked ? styles.disabled : ""].join(
                                            " "
                                        )}
                                    >
                                        <div className={styles.fileicon}>
                                            <IconByExtension type={file.type} />
                                        </div>
                                        <span className={styles.filename}>
                                            {file.name.slice(0, 20) + (file.name.length > 20 ? "..." : "")}
                                        </span>
                                        <FaTimes className={styles.close} onClick={() => removeFile(index)} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default UploadOverview
