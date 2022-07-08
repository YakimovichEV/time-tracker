import React, { useEffect, useState } from "react";
import { DateTime, Duration } from "luxon";
import { FaPauseCircle, FaPlayCircle, FaTrashAlt } from "react-icons/fa";

import { deleteItem, Time, updateItem } from "../store/slices/itemSlice";
import { useTypedDispatch } from "../hooks/useTypedDispatch";

const styles = {
    default:
        "flex items-center justify-between bg-white py-5 px-3 border-t border-gray-300 text-lg font-bold last:border-b",
    changed:
        "flex items-center justify-between bg-green-100 py-5 px-3 border-t border-gray-300 text-lg font-bold last:border-b",
} as const;

interface ItemProps {
    id: string;
    name: string;
    time: Time;
    isActive: boolean;
    snapShot: number;
}

export const Item: React.FC<ItemProps> = ({
    id,
    name,
    time,
    isActive,
    snapShot,
}) => {
    const dispatch = useTypedDispatch();

    const [counter, setCounter] = useState<Time>(time);
    const [active, setActive] = useState<boolean>(isActive);
    const [snapShotTik, setSnapshotTik] = useState<number>(snapShot);

    useEffect(() => {
        const now = DateTime.now().toSeconds();

        if (active) {
            setCounter({
                seconds: Math.ceil(now - snapShotTik + time.seconds),
            });
        }
    }, []);

    useEffect(() => {
        let timerId: NodeJS.Timer;

        dispatch(
            updateItem({
                id,
                name,
                time: counter,
                isActive: active,
                snapShot: snapShotTik,
            }),
        );

        if (active) {
            timerId = setInterval(() => {
                setCounter((prev) => {
                    return { seconds: prev.seconds + 1 };
                });
                setSnapshotTik(DateTime.now().toSeconds());
            }, 1000);
        }

        return () => clearInterval(timerId);
    }, [id, name, counter, active, snapShotTik, dispatch]);

    const handleActiveItem = () => {
        setActive((prev: boolean) => !prev);
    };

    const hadleDeleteItem = () => {
        if (window.confirm("Are you sure you want to delete element?")) {
            dispatch(deleteItem(id));
        }
    };

    return (
        <div className={active ? styles.changed : styles.default}>
            <div className="w-20 truncate sm:w-40 xl:w-60 2xl:w-80">{name}</div>
            <div>
                {Duration.fromObject(counter).toISOTime({
                    suppressMilliseconds: true,
                })}
            </div>
            <div className="flex items-center justify-between">
                {active ? (
                    <FaPauseCircle
                        onClick={handleActiveItem}
                        className="cursor-pointer mr-2 active:translate-y-px"
                        size={25}
                    />
                ) : (
                    <FaPlayCircle
                        onClick={handleActiveItem}
                        className="cursor-pointer mr-2 active:translate-y-px"
                        size={25}
                    />
                )}

                <FaTrashAlt
                    onClick={hadleDeleteItem}
                    className="cursor-pointer active:translate-y-px"
                    size={25}
                    color="red"
                />
            </div>
        </div>
    );
};
